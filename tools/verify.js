// Validate data.js and print standings.   Usage:  node tools/verify.js
//
// Checks every game for: a valid `winner` (must be one of the option keys),
// duplicate voters, and prints each game's vote total so you can eyeball it
// against Polly's "Total Votes" number. Then prints the standings using the
// SAME scoring code as the live page (app.js), so this can never disagree
// with the site.

const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");

// Load GAMES from data.js (browser global -> node global).
eval(fs.readFileSync(path.join(root, "data.js"), "utf8").replace("const GAMES", "global.GAMES"));

// Borrow computeStandings() from app.js without running render().
const appCode = fs.readFileSync(path.join(root, "app.js"), "utf8").replace(/\n(?:init|render)\(\);\s*$/, "");
eval(appCode + "\nglobal.computeStandings = computeStandings;");

let problems = 0;
console.log("Per-game check  (compare each 'total' to Polly's Total Votes):\n");
for (const g of GAMES) {
  const entries = Object.entries(g.options);
  let total = 0;
  const seen = new Set();
  const dupes = new Set();
  for (const [, voters] of entries) {
    total += voters.length;
    for (const n of voters) {
      if (seen.has(n)) dupes.add(n);
      seen.add(n);
    }
  }
  const badWinner = !(g.winner in g.options);
  const counts = entries.map(([k, v]) => `${k} ${v.length}`).join(", ");
  console.log(`  G${g.id}  ${g.matchup}`);
  console.log(`       ${counts}  | total ${total} | winner: ${g.winner}${badWinner ? "  <-- NOT A VALID OPTION KEY" : ""}`);
  if (dupes.size) console.log(`       DUPLICATE voters: ${[...dupes].join(", ")}`);
  if (badWinner) problems++;
  if (dupes.size) problems++;
}

const rows = computeStandings(GAMES);
console.log(`\nStandings  (top 12 of ${rows.length} players):`);
rows.slice(0, 12).forEach(r =>
  console.log(`  ${String(r.rank).padStart(2)}. ${r.name.padEnd(30)} ${r.correct} correct / ${r.played}  (${r.pct}%)`)
);
console.log(`\n  Packs awarded: ${rows.reduce((s, r) => s + r.packs, 0)}`);

// Pickups sanity (warnings only — never blocks a deploy).
try {
  eval(fs.readFileSync(path.join(root, "pickups.js"), "utf8").replace("const COLLECTED", "global.COLLECTED"));
  const owedBy = Object.fromEntries(rows.map(r => [r.name, r.packs]));
  let collected = 0, pending = 0;
  for (const [name, count] of Object.entries(global.COLLECTED || {})) {
    if (!(name in owedBy)) console.log(`  WARN pickups: "${name}" is not a current player`);
    else if (count > owedBy[name]) console.log(`  WARN pickups: "${name}" marked ${count} collected but only owed ${owedBy[name]}`);
    collected += Math.min(count, owedBy[name] || 0);
  }
  pending = rows.reduce((s, r) => s + r.packs, 0) - collected;
  console.log(`  Packs collected: ${collected} | awaiting pickup: ${pending}`);
} catch (e) { /* pickups.js missing — fine */ }

console.log(
  problems
    ? `\nFAIL: ${problems} structural problem(s) above. Fix data.js before deploying.`
    : `\nOK: no structural problems. Now eyeball each per-game total vs the screenshots, then deploy.`
);
process.exit(problems ? 1 : 0);
