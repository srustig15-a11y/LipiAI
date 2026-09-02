# LipiAI — Phase 1

This is the Phase 1 scaffold: landing page, dashboard, and a basic editor shell.
No backend, transliteration, or AI yet — those come in later phases.

## How to run

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## What to check

1. `/` — Landing page loads with the LipiAI hero, feature cards, and buttons.
2. Click "Create Document" or "Log In" → goes to `/dashboard`.
3. Dashboard shows 3 mock document cards. Click one → opens `/editor/:id`.
4. Editor page shows a top bar, a placeholder toolbar strip, and an A4-style page.

If all four of those work with no console errors, Phase 1 is confirmed and we move to
Phase 2 (Tiptap rich-text editor + real formatting toolbar).
