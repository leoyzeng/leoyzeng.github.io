# Portfolio

A clean, editorial portfolio built with **React + Vite + Tailwind CSS**.

## Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Tailwind CSS v3 | Utility-first styling |
| Vite 5 | Dev server & bundler |
| Cormorant Garamond + IBM Plex Mono | Typography |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── App.jsx                 # Router, ThemeContext, layout
├── index.css               # Tailwind directives + global styles
├── data/
│   └── portfolioData.js    # ← Edit this file to populate your content
├── components/
│   └── Navbar.jsx          # Fixed nav with hover dropdowns + theme toggle
└── pages/
    ├── Home.jsx             # Profile picture, bio, hero
    ├── Experience.jsx       # Timeline index
    ├── ExperienceDetail.jsx # Individual experience page
    ├── Projects.jsx         # Auto-play slideshow + grid
    ├── ProjectDetail.jsx    # Individual project page
    ├── Resume.jsx           # PDF view/download
    ├── Github.jsx           # GitHub profile + pinned repos
    └── Other.jsx            # Photo gallery with lightbox
```

## Customizing Your Content

Everything lives in **`src/data/portfolioData.js`**. Open it and fill in:

- `profile` — your name, title, bio, avatar URL, GitHub URL
- `experiences[]` — each entry has an `id`, company, role, period, tags, and a full `description`
- `projects[]` — each entry has an `id`, name, image, tech stack, summary, and full `description`
- `photos[]` — array of image objects with `src`, `alt`, and `span` (`'tall'` | `'wide'` | `'square'`)

## Resume PDF

Place your resume at `public/resume.pdf`. The Resume page will serve it automatically.

## Adding an Experience or Project

1. Add an entry to `experiences` or `projects` in `portfolioData.js`
2. Give it a unique `id` (used as the URL slug, e.g. `"my-company"` → `/experience/my-company`)
3. That's it — the navbar dropdowns and detail pages are generated automatically

## Theming

- **Dark mode** is on by default. Users can toggle with the ☀/☾ button in the nav.
- The preference is persisted in `localStorage`.
- Colors are defined as Tailwind custom tokens in `tailwind.config.js`:
  - `cream` / `noir` — background extremes
  - `amber` — accent color
  - `warm-100` through `warm-900` — neutral scale

To change the accent color, update `amber` in `tailwind.config.js`.

## Build for Production

```bash
npm run build
# Output goes to /dist — deploy to Vercel, Netlify, GitHub Pages, etc.
```

For GitHub Pages, set `base` in `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
