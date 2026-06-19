# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GooseBay band website — Vue 3 + Vite SPA for an Australian indie rock band. No backend, no TypeScript, no test suite.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Architecture

**Routing** — `src/router/index.js` defines five routes (`/`, `/about`, `/music`, `/shows`, `/contact`). Only `HomeView` is eagerly loaded; all others are lazy-loaded. A catch-all redirects to `/`. The router always scrolls to the top on navigation.

**Layout** — `App.vue` wraps every page with `<NavBar />` and `<FooterBar />`. Route transitions use a `page` named transition (`mode="out-in"`). The app-level CSS lives in `src/assets/css/app.css`, imported inside `App.vue`'s `<script setup>`.

**CSS structure** — Global design tokens (colours, fonts, spacing, buttons, utility classes) are in `src/assets/main.css`, loaded once via `src/main.js`. Each view and component imports its own scoped CSS file from `src/assets/css/` directly inside its `<script setup>` block — not via `<style>`. Do not use `<style>` blocks or inline styles where a CSS file already exists for that view.

**Design system** — Bold retro 70s gig-poster aesthetic. Core palette CSS variables defined in `:root` in `main.css`:
- `--color-purple` (#5C2D7E) — primary brand/button
- `--color-orange` (#E8721C) — CTA/filled buttons
- `--color-yellow` (#F0B429) — secondary accent
- `--color-cream` (#F2E2C4) — page background
- `--color-off-black` (#1C1410) — body text

Fonts: `Lilita One` (display/headings) and `Nunito` (body), loaded externally (not bundled).

Section backgrounds are controlled by modifier classes: `.section--purple`, `.section--orange`, `.section--yellow`, `.section--dark`. Button variants: `.btn` (purple), `.btn--filled` (orange), `.btn--yellow`.

**NavBar behaviour** — Transparent with no background on the home hero; gains a solid background when scrolled past 60px (`scrolled` ref) or on any non-home route (`isHome` computed). CSS classes `navbar--scrolled` and `navbar--solid` control this.

**Content is hardcoded data** — There is no API or CMS. Dynamic content lives as `ref([])` arrays in each view's `<script setup>`:
- **Releases** — `MusicView.vue` → `releases` ref. Each entry: `{ title, type, year, emoji, description, embedUrl, links[] }`.
- **Shows** — `ShowsView.vue` → `upcomingShows` and `pastShows` refs. Each entry: `{ day, month, venue, location, info?, ticketUrl? }`.
- **Band members** — `AboutView.vue` → `members` ref. Each entry: `{ name, role, image }`. Member images are imported from `src/assets/images/` at the top of the script.

**Images** — Stored in `src/assets/images/` (lowercase). Import images as ES modules in `<script setup>` so Vite processes and hashes them. The gallery images in `HomeView.vue` are mass-imported from the `Dance wth you promo revised/` subfolder (note the typo in the folder name — do not rename it without updating all imports).

**Contact form** — `ContactView.vue` has a working UI but `handleSubmit` only logs to console. It needs to be wired to a real service (Formspree, Netlify Forms, or a backend endpoint).

**GitHub Pages deployment** — `vite.config.js` has a commented-out `base: '/Goosebay-website/'`. Uncomment and set this before deploying to GitHub Pages.
