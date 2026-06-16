// Tiny server for the World Cup leaderboard.
// - Serves the static site (index.html, app.js, data.js, styles.css, fonts).
// - Stores pack pickups so multiple people share one live list.
// - Edits require the EDIT_PASSCODE (checked here, server-side — not bypassable
//   from the browser like a static-site passcode would be).
//
// Persistence: a JSON file under DATA_DIR (a Railway Volume mounted at /data).
// If no volume is attached it falls back to ./.data and warns — fine for local
// dev, but on Railway WITHOUT a volume the data resets on every redeploy.

const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const EDIT_PASSCODE = process.env.EDIT_PASSCODE || "";

// ---- persistence ----
function resolveDataDir() {
  const preferred = process.env.DATA_DIR || "/data";
  try {
    fs.mkdirSync(preferred, { recursive: true });
    fs.accessSync(preferred, fs.constants.W_OK);
    return preferred;
  } catch (e) {
    const fallback = path.join(__dirname, ".data");
    fs.mkdirSync(fallback, { recursive: true });
    console.warn(`[pickups] WARNING: "${preferred}" not writable; using "${fallback}". ` +
      `On Railway, attach a Volume mounted at /data or pickups will reset on redeploy.`);
    return fallback;
  }
}
const DATA_DIR = resolveDataDir();
const PICKUPS_FILE = path.join(DATA_DIR, "pickups.json");

// Seed the very first run from the committed pickups.js (COLLECTED).
function seedFromCommittedFile() {
  try {
    const txt = fs.readFileSync(path.join(__dirname, "pickups.js"), "utf8").replace("const COLLECTED", "global.COLLECTED");
    eval(txt);
    return (global.COLLECTED && typeof global.COLLECTED === "object") ? global.COLLECTED : {};
  } catch (e) {
    return {};
  }
}

function loadPickups() {
  try {
    return JSON.parse(fs.readFileSync(PICKUPS_FILE, "utf8"));
  } catch (e) {
    const seed = seedFromCommittedFile();
    savePickups(seed);
    console.log(`[pickups] seeded ${Object.keys(seed).length} entries from pickups.js -> ${PICKUPS_FILE}`);
    return seed;
  }
}

function savePickups(map) {
  const tmp = PICKUPS_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(map, null, 2));
  fs.renameSync(tmp, PICKUPS_FILE); // atomic-ish: avoid a half-written file
}

let pickups = loadPickups();

// ---- app ----
const app = express();
app.use(express.json());

// Read: open to everyone (for rendering the board).
app.get("/api/pickups", (req, res) => res.json(pickups));

// Write: one entry at a time, gated by the passcode. Per-entry (not whole-map)
// so two editors ticking different people can't clobber each other.
app.post("/api/pickups", (req, res) => {
  if (!EDIT_PASSCODE) return res.status(503).json({ error: "Editing not configured (set EDIT_PASSCODE)." });
  const { name, count, passcode } = req.body || {};
  if (passcode !== EDIT_PASSCODE) return res.status(403).json({ error: "Wrong passcode." });
  if (typeof name !== "string" || !name.trim()) return res.status(400).json({ error: "Bad name." });
  const n = Number(count);
  if (!Number.isInteger(n) || n < 0) return res.status(400).json({ error: "Bad count." });

  if (n === 0) delete pickups[name];
  else pickups[name] = n;
  try { savePickups(pickups); } catch (e) { return res.status(500).json({ error: "Save failed." }); }
  res.json(pickups);
});

// Static site (everything else).
app.use(express.static(__dirname, { extensions: ["html"] }));

app.listen(PORT, () => {
  console.log(`[leaderboard] listening on :${PORT}  | data: ${PICKUPS_FILE}  | editing ${EDIT_PASSCODE ? "ON" : "OFF (no EDIT_PASSCODE)"}`);
});
