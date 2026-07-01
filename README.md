# Kurt Russel Nite — Developer Portfolio

A modern, Valorant-themed developer portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Statically exported for fast, serverless deployment.

[![Live Demo](https://img.shields.io/badge/Live-Demo-FF4655?style=for-the-badge)](https://krvn.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## Preview

### Desktop

| Welcome Animation |
|:---:|
| ![Welcome](readme_img/welcome.png) |

| Hero Section | Featured Projects |
|:---:|:---:|
| ![Hero](readme_img/hero.png) | ![Projects](readme_img/projects.png) |

| Experience | Contact Form |
|:---:|:---:|
| ![Experience](readme_img/experience.png) | ![Contact](readme_img/contact.png) |

### Mobile

| Welcome | Hero | Projects |
|:---:|:---:|:---:|
| ![Mobile Welcome](readme_img/mobile-welcome.jpg) | ![Mobile Hero](readme_img/mobile-hero.jpg) | ![Mobile Project](readme_img/mobile-project.jpg) |

| Experience | Skills | Contact |
|:---:|:---:|:---:|
| ![Mobile Experience](readme_img/mobile-experience.jpg) | ![Mobile Skills](readme_img/mobile-skills.jpg) | ![Mobile Contact](readme_img/mobile-contact.jpg) |

---

## Features

### Design & Theme
- **Valorant-inspired color palette** — deep navy background, signature red accents, warm cream typography
- **Sharp-edged UI** — minimal border radius (2-4px) for a tactical, modern aesthetic
- **Custom design tokens** — all colors, spacing, and typography managed via Tailwind CSS 4 `@theme`
- **Responsive** — mobile-first design that works across all screen sizes

### Animations & Interactions
- **Welcome splash screen** — animated logo reveal with loading bar on first visit
- **Scroll-reveal effects** — sections fade in as they enter the viewport
- **Hero entrance animation** — staggered element reveals after splash completes
- **Image carousel** — smooth sliding transitions with touch/swipe gesture support for mobile

### Featured Projects Section
- **Project status badges** — "Completed" / "Unfinished" indicators aligned with project info
- **Tech stack display** — highlighted in accent color for quick scanning
- **Client/Admin image toggle** — switch between different app views (GG Billiards)
- **Dot indicators** — visual navigation for carousel position
- **Swipe gestures** — drag to navigate on both mobile and desktop

### Experience Section
- **3 internship roles** displayed with detailed summaries
- **Tech stack chips** — categorized into Frameworks, Libraries, Testing, and Tools
- **Supervisor links** — linked to LinkedIn profiles
- **Hours rendered** — total working hours per role

### Contact Form
- **Input validation** — text-only fields, proper email format checking
- **Confirmation modal** — professional thank-you message on successful submission
- **Accessible** — proper label associations, focus states, and ARIA attributes

### Performance & Deployment
- **Static Site Generation (SSG)** — pre-rendered at build time for instant loading
- **Static export** — no server required, deployable to any static host
- **Optimized fonts** — Bebas Neue + Manrope loaded via `next/font` with display swap
- **Minimal client JS** — Server Components for static sections, client hydration only where needed

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Fonts | Bebas Neue, Manrope (via next/font) |
| Utilities | clsx, tailwind-merge |
| Deployment | Static Export → Netlify |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (generates /out folder)
npm run build
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & global styles
├── components/
│   ├── icons/              # SVG icon components
│   ├── layout/             # Navbar, Footer, Container
│   ├── sections/           # Hero, Projects, Experience, About, Skills, ContactForm
│   └── ui/                 # Button, Carousel, Modal, SkillChip, etc.
├── data/                   # Content data (projects, skills, experience, social)
├── lib/                    # Utilities (cn, fonts, useReveal)
└── types/                  # TypeScript interfaces
```

---

## Author

**Kurt Russel Nite**

- [LinkedIn](https://linkedin.com/in/kurt-russel-nite/)
- [GitHub](https://github.com/russelnite)
- [Instagram](https://www.instagram.com/_nightyyy)
