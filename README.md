# GooseBay Website

Retro 70s-inspired indie rock band website built with **Vue 3 + Vite**.

## Setup

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The built files go to `dist/` — ready for GitHub Pages or any static host.

## GitHub Pages Deployment

1. In `vite.config.js`, uncomment the `base` option and set it to your repo name:
   ```js
   base: '/Goosebay-website/',
   ```
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages (manually, or via a GitHub Actions workflow).

## Project Structure

```
src/
├── assets/
│   └── main.css          # Global retro 70s theme
├── components/
│   ├── NavBar.vue         # Sticky navigation with mobile hamburger
│   └── FooterBar.vue      # Footer with socials & links
├── router/
│   └── index.js           # Vue Router config
├── views/
│   ├── HomeView.vue       # Hero + teasers
│   ├── AboutView.vue      # Band bio & member lineup
│   ├── MusicView.vue      # Releases & streaming links
│   ├── ShowsView.vue      # Upcoming & past gigs
│   └── ContactView.vue    # Contact form & info
├── App.vue                # Root layout with page transitions
└── main.js                # App entry point
```

## Customisation

- **Band photos**: Replace placeholder divs in `AboutView.vue` and the hero background in `HomeView.vue`
- **Members**: Edit the `members` array in `AboutView.vue`
- **Releases**: Edit the `releases` array in `MusicView.vue`
- **Shows**: Edit `upcomingShows` / `pastShows` in `ShowsView.vue`
- **Contact form**: Wire `handleSubmit()` in `ContactView.vue` to a backend (Node.js API, Formspree, etc.)
- **Colours**: Tweak CSS custom properties in `main.css`

## Future Plans

- Node.js backend for merch shop
- CMS integration for dynamic content
- Spotify / Apple Music embed widgets