# TopCollegeInfo Frontend

A responsive React landing page for an education and admissions platform focused on exams, colleges, scholarships, articles, and career guidance.

## Overview

This project is built as a modern frontend homepage using React, TypeScript, Vite, and Tailwind CSS. The current version presents key information in a clean, section-based layout and uses reusable components for each major block on the page.

## Features

- Sticky navigation bar with dropdown menus and a mobile menu
- Auto-rotating hero banner with search input
- Featured institutions carousel
- YouTube learning section with a main video and watch-next list
- Article cards with load-more functionality
- Responsive exams slider
- Footer with category links and social icons

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Headless UI
- Heroicons
- React Icons

## Project Structure

```text
internship-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Featured.tsx
│   │   ├── YoutubeSection.tsx
│   │   ├── Articles.tsx
│   │   ├── ExamSection.tsx
│   │   └── Footer.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the local Vite development server
- `npm run build` runs TypeScript checks and creates the production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint across the project

## Customization Notes

- Most page content is currently stored directly inside the component files as arrays and JSX text.
- Images and visual assets are stored in `src/assets`.
- The page title and favicon are configured in `index.html`.
- `dist/` is generated output and should not be committed.

## Future Improvements

- Connect the search bar to real data or routing
- Replace placeholder links with working pages
- Move static content into a central data layer or API
- Add tests for interactive sections such as sliders and menus

## License

This project is for internship and learning purposes unless you choose to add a different license.
