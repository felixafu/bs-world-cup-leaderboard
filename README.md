# Blank Street Panini — World Cup Leaderboard

Static leaderboard for the World Cup sticker game. People vote on match
results in Slack (Polly), one correct guess earns one sticker pack.

## Update after each game

Open [`data.js`](data.js), copy a game block, fill in the matchup, the
`winner` (must exactly match an option name), and paste each option's voters
from the Polly results. The leaderboard recalculates on reload, no other
changes needed.

## Pack pickups (shared, multi-editor)

Who's collected their packs is tracked **server-side** so two or more people can
manage one shared list live. Everyone sees pickup status; editing is gated by a
passcode checked on the server (see [`server.js`](server.js)).

- Click **Edit pickups**, enter the passcode once (remembered on that device),
  then tick people off. Changes save instantly and everyone's view updates
  within ~8s. Share the passcode with whoever should be able to edit.
- The pickup state is a JSON file on a Railway **Volume** (`/data/pickups.json`),
  seeded once from [`pickups.js`](pickups.js).

## Run locally

```bash
npm install
EDIT_PASSCODE=test npm start          # http://localhost:3000
```
Without a server it still works read-only: open `index.html` directly and it
falls back to the committed `pickups.js` snapshot (no editing).

## Deploy

The interactive site runs on **Railway** (it needs a server for pickups).
GitHub Pages still serves a read-only mirror.

**Railway (one time):**
1. New Project → Deploy from this GitHub repo. Railway auto-detects Node and
   runs `npm start` (the app reads `PORT` automatically).
2. Add a **Volume** to the service, mount path `/data` (so pickups survive
   redeploys).
3. Add a variable **`EDIT_PASSCODE`** = your chosen passcode.
4. Deploy → it gives you a `*.up.railway.app` URL. That's the live, editable site.

After that, pushing to `main` (via `tools/deploy.sh`) redeploys both Railway and
the Pages mirror. Game results still live in `data.js`; pickups live on the
server and are not part of a deploy.

## Notes

- Styling uses BlankOS design system tokens.
- Vote data is public/non-anonymous (matches the Polly settings).
- The Railway `EDIT_PASSCODE` is the only edit gate; it's never committed. The
  passcode is checked server-side, so it can't be bypassed from the browser.
