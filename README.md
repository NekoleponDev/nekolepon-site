# Nekolepon Studio Website

React + Vite multi-page site styled with Tailwind CSS and bespoke component styles for the neo-brutalist studio art direction.

## Structure
- `src/main.jsx` — React entry point
- `src/App.jsx` — routing and shared layout
- `src/pages/` — Home, Games, Hening detail, Studio, Contact, and 404 pages
- `src/components/` — reusable header, footer, mascot, ticker, game card, recipe, and contact components
- `src/data/games.js` — game content
- `src/index.css` — Tailwind directives, base styles, responsive theme and art-direction styles
- `tailwind.config.js` — Tailwind content scanning, colors, and fonts
- `postcss.config.js` — Tailwind/PostCSS pipeline

## Develop
```bash
npm install
npm run dev
``

## Production build
```bash
npm run build
npm run preview
``

## Vercel
Build command: `npm run build`; output directory: `dist`. Vercel routing rewrites support direct links to React Router pages. The generated `dist/` folder is ignored by Git.
