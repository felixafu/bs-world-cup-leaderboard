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
      });
    });
  });

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
    return `
      <tr class="${medal ? "podium " + medal : ""}">
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
        <td class="col-packs">${r.packs > 0 ? "🎁".repeat(r.packs) + ` <b>${r.packs}</b>` : "—"}</td>
      </tr>
    `;
  }).join("");
}

render();
