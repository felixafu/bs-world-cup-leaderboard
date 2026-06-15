---
name: update-leaderboard
description: Update the World Cup Panini leaderboard from a day's Polly poll results. Use when Felix uploads poll screenshots (or poll data) and asks to update/upload the leaderboard. Adds game blocks to data.js with the real match results, verifies, and deploys the live GitHub Pages site.
---

# Update the World Cup leaderboard

Daily flow: Felix drops the day's Polly poll results, you add them to `data.js`
with the actual match outcome, verify, and deploy. 1 correct guess = 1 pack.

## 1. Read the poll results into game blocks

Each poll = one game block in `GAMES` (`data.js`). Shape:

```js
{
  id: 13, label: "Game 13",
  matchup: "Team A vs Team B",
  date: "Jun 15",
  winner: "Team A",          // EXACT option key; use "Draw" for a draw
  options: {
    "Team A": ["Voter One", "Voter Two", ...],
    "Draw":   [...],
    "Team B": [...]
  }
}
```

Rules that prevent silent scoring bugs:
- **Voter names must be byte-identical across games** (it's the join key). Copy
  the @mention text minus the `@`. Watch: `Måns`, `Uğur`, `becky` (lowercase),
  and team names with accents: `Türkiye`, `Curaçao`.
- **`winner` must be one of the option keys, spelled identically.** A draw is
  `"Draw"`. If the match was a draw, the winning option is `"Draw"`, not a team.
- Keep the option keys matching the team names shown in the poll.
- Empty options are fine: `"Curaçao": []`.

## 2. Get the real results — ONE lookup, not one-per-match

All of a day's results sit on a single page. Fetch one and read them all:
`WebSearch "World Cup <date> results"` then `WebFetch` an ESPN/Wikipedia
scoreboard. Map each score to a winner key (draw -> `"Draw"`). Don't run a
separate search per game.

## 3. Verify

```bash
node tools/verify.js
```
Prints each game's vote total + flags bad winners / duplicate voters, then shows
standings. **Eyeball each printed total against Polly's "Total Votes"** for that
poll — that's the check that catches a missed or double-counted name. Fix
`data.js` until it's clean.

## 4. Deploy

```bash
bash tools/deploy.sh "Add Games 13-14 results"
```
Validates again, branches (never commits to main), pushes, opens a PR, and
merges it — which republishes the live site:
https://felixafu.github.io/bs-world-cup-leaderboard/ (~1-2 min).

## Pack pickups (who's collected)

The "Collected" column tracks who has picked up their packs.
- Ticking a box saves **instantly in the browser** (localStorage) — fine for
  live handouts, no deploy needed. But those ticks are private to that browser.
- To make pickups **shared/permanent**, the state must be committed to
  `pickups.js` (`COLLECTED`: name -> packs collected). The bar above the table
  shows "N unsaved changes" + a **Copy pickup list to commit** button.
- To save: click the button (copies the new `pickups.js` contents), then either
  paste it into `pickups.js` and run `deploy.sh`, or just tell Claude
  "save pickups: <paste>" and it'll commit + deploy.
- A box auto-unchecks if a player later earns more packs (they owe more again),
  so "✓" always means "caught up to date."

## Notes
- Scoring logic lives in `app.js` (`computeStandings`); `verify.js` reuses it.
- Static site, no build step. GitHub Pages serves `main` root.
