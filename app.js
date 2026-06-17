// Compute leaderboard from GAMES (data.js) and render the page.

function computeStandings(games) {
  const players = new Map(); // name -> { name, played, correct, packs }

  games.forEach(game => {
    Object.entries(game.options).forEach(([option, voters]) => {
      const right = option === game.winner;
      voters.forEach(name => {
        if (!players.has(name)) {
          players.set(name, { name, played: 0, correct: 0, packs: 0 });
        }
        const p = players.get(name);
        p.played += 1;
        if (right) { p.correct += 1; p.packs += 1; }
        else if (game.freebie) { p.packs += 1; } // consolation: everyone who voted gets a pack, but it's not a correct guess
      });
    });
  });

  // Everyone in the list gets 2 baseline packs, regardless of correct guesses.
  const BASELINE_PACKS = 2;
  players.forEach(p => { p.packs += BASELINE_PACKS; });

  const rows = [...players.values()].map(p => ({
    ...p,
    pct: p.played ? Math.round((p.correct / p.played) * 100) : 0
  }));

  // Sort: most correct, then accuracy, then fewest played, then name.
  rows.sort((a, b) =>
    b.correct - a.correct ||
    b.pct - a.pct ||
    a.played - b.played ||
    a.name.localeCompare(b.name)
  );

  // Dense rank with ties (same correct + pct share a rank).
  let rank = 0, prevKey = null;
  rows.forEach((r, i) => {
    const key = `${r.correct}|${r.pct}`;
    if (key !== prevKey) { rank = i + 1; prevKey = key; }
    r.rank = rank;
  });

  return rows;
}

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

// ---------- "Last updated" badge ----------
// LAST_UPDATED (version.js) is stamped at deploy time. Show how long ago, and
// warn if it's been over a day (results may not be in yet).
function renderLastUpdated() {
  const el = document.getElementById("last-updated");
  if (!el) return;
  const iso = typeof LAST_UPDATED !== "undefined" ? LAST_UPDATED : null;
  const then = iso ? new Date(iso).getTime() : NaN;
  if (!iso || isNaN(then)) { el.style.display = "none"; return; }
  const ms = Date.now() - then;
  const mins = Math.floor(ms / 60000), hrs = Math.floor(mins / 60), days = Math.floor(hrs / 24);
  const ago = mins < 1 ? "just now" : mins < 60 ? `${mins}m ago` : hrs < 24 ? `${hrs}h ago` : `${days}d ago`;
  const stale = ms >= 24 * 3600 * 1000;
  el.className = "last-updated" + (stale ? " stale" : "");
  el.textContent = stale ? `⚠️ Updated ${ago} — may be stale, refreshing soon` : `Updated ${ago}`;
}

// ---------- Pack pickups (shared, server-backed) ----------
// State lives on the server (server.js): name -> packs collected. Everyone
// reads it; editing is gated by a passcode checked server-side. If the API
// isn't reachable (opened as a file, or on GitHub Pages with no server) we
// fall back to the committed pickups.js snapshot, read-only.
const PASS_KEY = "bs-wc-passcode";
const FALLBACK = (typeof COLLECTED !== "undefined" && COLLECTED) || {};
let pickups = { ...FALLBACK };
let apiUp = false;     // is the pickups API reachable?
let editMode = false;  // has the user unlocked editing on this device?

const collectedCount = name => Math.max(0, pickups[name] || 0);
const canEdit = () => apiUp && editMode;

async function refreshPickups() {
  try {
    const res = await fetch("api/pickups", { cache: "no-store" });
    if (!res.ok) throw new Error("api " + res.status);
    pickups = await res.json();
    apiUp = true;
  } catch (e) {
    apiUp = false; // no server -> keep the read-only fallback snapshot
  }
  render();
}

// Tick/untick one player. Optimistic update, POST, then reconcile with server.
async function togglePickup(el) {
  if (!canEdit()) return;
  const name = el.dataset.player;
  const count = el.checked ? Number(el.dataset.owed) : 0;
  pickups[name] = count; // optimistic
  render();
  try {
    const res = await fetch("api/pickups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, count, passcode: localStorage.getItem(PASS_KEY) || "" })
    });
    if (res.status === 403) {
      localStorage.removeItem(PASS_KEY); editMode = false;
      alert("Wrong passcode — editing locked.");
    }
  } catch (e) { /* network hiccup — refresh below resyncs */ }
  refreshPickups();
}

function setEditMode(on) { editMode = on && apiUp; render(); }

// Unlock editing: stash the passcode on this device (verified server-side on write).
function unlockEditing() {
  const code = prompt("Enter the edit passcode:");
  if (code == null) return;
  localStorage.setItem(PASS_KEY, code);
  setEditMode(true);
}

function renderPickupsBar(rows) {
  const pending = rows.reduce((s, r) => s + Math.max(0, r.packs - collectedCount(r.name)), 0);
  const people = rows.filter(r => r.packs - collectedCount(r.name) > 0).length;
  let right;
  if (!apiUp) {
    right = `<span class="pickups-clean">read-only (offline snapshot)</span>`;
  } else if (editMode) {
    right = `<span class="pickups-editing">● editing live</span>
             <button class="pickups-save" onclick="setEditMode(false)">Done</button>`;
  } else {
    right = `<button class="pickups-save" onclick="unlockEditing()">Edit pickups</button>`;
  }
  document.getElementById("pickups-bar").innerHTML = `
    <span class="pickups-summary">🎁 ${pending} pack${pending === 1 ? "" : "s"} awaiting pickup${people ? ` · ${people} ${people === 1 ? "person" : "people"}` : ""}</span>
    <div class="pickups-actions">${right}</div>`;
}

function render() {
  const rows = computeStandings(GAMES);

  // Totals
  const totalPacks = rows.reduce((s, r) => s + r.packs, 0);
  const totalCorrect = rows.reduce((s, r) => s + r.correct, 0);
  const totalGuesses = rows.reduce((s, r) => s + r.played, 0);
  const perfect = rows.filter(r => r.played === GAMES.length && r.pct === 100).length;

  document.getElementById("stat-players").textContent = rows.length;
  document.getElementById("stat-games").textContent = GAMES.length;
  document.getElementById("stat-packs").textContent = totalPacks;
  document.getElementById("stat-accuracy").textContent =
    Math.round((totalCorrect / totalGuesses) * 100) + "%";

  // Leaderboard
  const tbody = document.getElementById("leaderboard-body");
  tbody.innerHTML = rows.map(r => {
    const medal = r.rank === 1 ? "gold" : r.rank === 2 ? "silver" : r.rank === 3 ? "bronze" : "";
    const isPerfect = r.played === GAMES.length && r.pct === 100;
    const got = Math.min(collectedCount(r.name), r.packs);
    const caughtUp = r.packs > 0 && got >= r.packs;
    const pending = Math.max(0, r.packs - got); // available to pick up
    // all earned packs as gifts: collected ones greyed, the rest still to collect
    const gifts = Array.from({ length: r.packs }, (_, i) =>
      `<span class="gift${i < got ? " gift-collected" : ""}">🎁</span>`).join("");
    const collectedCell = r.packs === 0
      ? '<span class="pickup-status muted">—</span>'
      : `<label class="pickup">
           <input type="checkbox" data-player="${r.name}" data-owed="${r.packs}"
                  ${caughtUp ? "checked" : ""} ${canEdit() ? "" : "disabled"} onchange="togglePickup(this)" />
           <span class="pickup-status">${caughtUp ? "✓" : `${got}/${r.packs}`}</span>
         </label>`;
    return `
      <tr class="${medal ? "podium " + medal : ""}${caughtUp ? " collected-done" : ""}">
        <td class="col-rank"><span class="rank-badge">${r.rank}</span></td>
        <td class="col-player">
          <span class="avatar">${initials(r.name)}</span>
          <span class="player-name">${r.name}${isPerfect ? ' <span class="perfect-tag">PERFECT</span>' : ""}</span>
        </td>
        <td class="col-num">${r.played}</td>
        <td class="col-num strong">${r.correct}</td>
        <td class="col-num">
          <div class="pct-wrap">
            <div class="pct-bar"><span style="width:${r.pct}%"></span></div>
            <span class="pct-label">${r.pct}%</span>
          </div>
        </td>
        <td class="col-packs">${r.packs > 0 ? gifts + (pending > 0 ? ` <b>${pending}</b>` : ` <span class="pack-done">✓</span>`) : "—"}</td>
        <td class="col-collected">${collectedCell}</td>
      </tr>
    `;
  }).join("");

  // The "Collected" checkbox column only appears while editing.
  document.querySelector("table").classList.toggle("editing", canEdit());

  renderPickupsBar(rows);
  renderLastUpdated();
}

function init() {
  render();            // instant paint from data.js (+ fallback pickups)
  refreshPickups();    // then load the shared pickup state from the server
  // keep it live: re-fetch every 8s so editors see each other's changes
  setInterval(() => { if (!document.hidden) refreshPickups(); }, 8000);
}
init();
