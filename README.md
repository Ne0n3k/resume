# Personal Portfolio (React + Vite)

Responsive landing page with the full CV—contact details, profile, experience, education, skills, languages, and highlighted projects.

## Highlights

- **Typed resume store** – All copy lives in `src/data/resume.ts`, backed by domain contracts from `src/domain/resume.ts`.
- **Composable layout** – `PageShell`, `SectionCard`, and other UI atoms deliver a consistent glassmorphism surface with sticky sidebar behavior.
- **Scroll animations** – `useReveal` + `IntersectionObserver` power subtle entrance motions for every card.
- **Contact-first sidebar** – dedicated component for name, GitHub, LinkedIn, phone, and email with automatic protocol handling.
- **Responsive design** – CSS grid + fluid spacing adjust seamlessly down to mobile.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- CSS (global styles in `index.css`, layout/theming in `App.css`)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

### Production Commands

```bash
npm run build
npm run preview
npm run lint
```

## Architecture Overview

| Area            | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `src/domain`    | Pure TypeScript types describing each resume entity                            |
| `src/data`      | Centralized CV content consumed throughout the UI                              |
| `src/components`| Layout, sections, animations, and UI atoms (all SOLID-aligned)                 |
| `src/hooks`     | Cross-cutting logic such as `useReveal`                                        |
