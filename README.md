# Blank Street Panini — World Cup Leaderboard

Static leaderboard for the World Cup sticker game. People vote on match
results in Slack (Polly), one correct guess earns one sticker pack.

## Update after each game

Open [`data.js`](data.js), copy a game block, fill in the matchup, the
`winner` (must exactly match an option name), and paste each option's voters
from the Polly results. The leaderboard recalculates on reload, no other
changes needed.

## Run locally

Just open `index.html` in a browser, or:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages

```bash
# 1. create the repo (one time)
gh repo create bs-world-cup-leaderboard --public --source=. --remote=origin

# 2. push
git add -A && git commit -m "Update leaderboard"
git push -u origin main

# 3. enable Pages (one time) — serves from the main branch root
gh api repos/{owner}/bs-world-cup-leaderboard/pages -X POST \
  -f "source[branch]=main" -f "source[path]=/" 2>/dev/null || \
  echo "Enable Pages manually: repo Settings > Pages > Branch: main / root"
```

Site goes live at `https://<your-username>.github.io/bs-world-cup-leaderboard/`.

## Notes

- Styling uses Blank Street brand colors as placeholders. Share the BlankOS
  design system as a Figma cloud URL to wire in exact tokens.
- Vote data is public/non-anonymous (matches the Polly settings).
