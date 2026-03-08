# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

HuskyDue — monorepo that scrapes UConn's HuskyCT (Blackboard) LMS, normalizes assignment data, syncs deadlines to Google Calendar, and surfaces them in a dashboard. Three services:

- `apps/web` — Next.js 15 (App Router, Tailwind v4) dashboard
- `apps/api` — FastAPI backend; stores/diffs scraped data, serves REST endpoints
- `apps/scraper` — Playwright headless scraper; runs on a schedule (APScheduler/cron)

All services share **Supabase** for DB, auth, and storage.

## Commands

### Web (Next.js)
```bash
cd apps/web
pnpm dev          # dev server on :3000
pnpm build
pnpm lint
```

### API (FastAPI)
```bash
cd apps/api
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Scraper (Playwright)
```bash
cd apps/scraper
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
playwright install chromium
python scraper.py
```

## Architecture

### Data flow
```
[HuskyCT] → scraper (Playwright) → normalize → Supabase DB
                                              ↓
                                    api (FastAPI) change detector
                                              ↓
                              Google Calendar sync + email/push notifications
                                              ↓
                                    web (Next.js) dashboard
```

### Supabase schema (planned)
| Table | Key columns |
|-------|-------------|
| `users` | id, email, google_token, huskyct_session |
| `courses` | id, course_id, name, user_id |
| `items` | id, title, type, due_date, course_id, hash, last_seen |
| `notifications` | id, event_type, user_id, timestamp |

Change detection compares item `hash` on each scrape cycle. Event types: `NEW_ASSIGNMENT`, `DEADLINE_CHANGED`, `NEW_ANNOUNCEMENT`.

### Scraper design
- Recursive DOM traversal — handles arbitrary Blackboard folder nesting
- Keyword + regex heuristics to classify items (homework, quiz, lab, exam…)
- Outputs normalized JSON: `{ course, title, type, due_date, link }`
- Third-party tools (Pearson, Gradescope) stored as opaque links for now
- Optional Claude NLP layer for parsing free-text announcements (runs async, non-blocking)

### Auth
Supabase Auth handles user sessions. HuskyCT credentials are stored encrypted in Supabase (never in env files in production).

## Package manager
Always use **pnpm** for Node.js. Never use npm.

Use `pnpm exec playwright` not `node -e require('playwright')`
Playwright is installed at the monorepo root, not in /src/web
