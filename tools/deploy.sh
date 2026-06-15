#!/usr/bin/env bash
# Validate -> commit -> push -> PR -> merge to main (updates the live site).
# Respects the "never commit directly to main" rule: branches automatically,
# then lands via a GitHub PR merge (server-side, not a local push to main).
#
# Usage:  bash tools/deploy.sh "Add Game 13-14 results"
set -euo pipefail
cd "$(dirname "$0")/.."

MSG="${1:-Update leaderboard}"

# 1. Validate. Aborts the whole deploy if anything is wrong.
node tools/verify.js

# 2. Branch if we're on main.
BRANCH="$(git branch --show-current)"
if [ "$BRANCH" = "main" ]; then
  BRANCH="feature/leaderboard-$(date +%Y%m%d-%H%M%S)"
  git checkout -b "$BRANCH"
fi

# 3. Commit + push.
git add -A
git commit -m "$MSG

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
git push -u origin "$BRANCH"

# 4. Open the PR and merge it (this is what publishes to GitHub Pages).
gh pr create --fill --base main --head "$BRANCH"
gh pr merge "$BRANCH" --merge --delete-branch

# 5. Sync local main.
git checkout main
git pull --ff-only origin main

echo ""
echo "Deployed. Live in ~1-2 min: https://felixafu.github.io/bs-world-cup-leaderboard/"
