# Mark Bassem — React Portfolio

A modern React + Vite portfolio site with animated hero content, a filterable projects section, theme switching, and a contact form (Formspree) with Lottie animations.

## Live Demo
- (Add your deployed URL here if you have one)

## Features
- Responsive layout with a clean single-page structure
- Animated hero + UI transitions (Framer Motion)
- Filter projects by category (HTML/CSS, JavaScript, React, Node)
- Contact form with Formspree (with success animation)
- Theme toggle (light/dark) persisted in `localStorage`

## Tech Stack
- **Frontend:** React, ReactDOM
- **Build tooling:** Vite
- **Styling:** CSS (including component-level CSS files)
- **Animations:** Framer Motion
- **Lottie animations:** lottie-react
- **Contact form backend:** @formspree/react
- **Linting:** ESLint

## Screenshots / Assets
This project includes image assets in `/public`, used by the UI and the projects list.

Examples:
- `public/IMG_0006-modified.png` (avatar)
- Project thumbnails:
  - `public/E-commerce_Website.jpg`
  - `public/E-commerce_Website_2.jpg`
  - `public/Portfolio.jpg`
  - `public/Portfolio-2.jpg`
  - `public/Book-Store.jpg`
  - `public/UML-Generator.jpg`
  - `public/CPU-Simulation.jpg`
  - `public/Projects.jpg`
  - `public/Elmosoo3a.jpg`

## Project Structure (high level)
- `src/App.jsx` — page composition (Header → Hero → Main → Contact → Footer)
- `src/main.jsx` — React entry point
- `src/components/`
  - `1-header/Header.jsx` — navigation + theme toggle
  - `2-hero/Hero.jsx` — animated hero section
  - `3-main/Main.jsx` — projects gallery with category filtering
  - `3-main/myProjects.js` — the projects data model (titles, links, images, descriptions)
  - `4-contact/Contact.jsx` — Formspree form + Lottie success animation
  - `5-footer/Footer.jsx` — footer links + copyright
- `public/` — static assets

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run development server
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Preview production build locally
```bash
npm run preview
```

### 5) Lint
```bash
npm run lint
```

## Customize Content

### Projects list
Edit `src/components/3-main/myProjects.js`.
- Each entry contains:
  - `projectTitle`
  - `category` (used for filtering)
  - `imgPath` (thumbnail path in `public`)
  - `description`
  - `link` (live demo)
  - `github` (repository link)

### Contact form (Formspree)
Edit `src/components/4-contact/Contact.jsx`.
- The Formspree form id is set in:
  - `useForm("xykdybvq")`

If you want to use your own Formspree form, replace that id and verify your Formspree settings.

## Notes
- The UI uses `localStorage` key `currentMode` to persist the selected theme.
- Lottie animations are loaded from `src/animation/*.json`.

