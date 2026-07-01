# Kiroverse Developer Portfolio — Design System Rules

## Overview

Design system documentation for **Kurt Russel Nite's Developer Portfolio**, extracted from the Figma design file. This document defines all design tokens, component patterns, layout rules, and implementation guidelines for building with **Next.js 15, React 19, TypeScript, and Tailwind CSS 4**.

---

## 1. Design Tokens

### 1.1 Color Palette

```typescript
// tokens/colors.ts

export const colors = {
  // Primary
  primary: {
    DEFAULT: '#C3B1FF', // Purple accent — buttons, links, CTAs
  },

  // Neutral
  neutral: {
    white: '#FFFFFF',
    offwhite: '#C7C7C7',    // Body text, secondary content
    darkGray: '#484848',    // Borders, dividers, muted elements
    dark: '#222222',        // Icon button backgrounds
    card: '#1A1A1A',        // Card backgrounds, input fields
    black: '#0A0A0A',       // Tags, button text on primary
  },

  // Background
  background: {
    DEFAULT: '#1E0031',     // Page background — deep purple/dark
  },
} as const;
```

**Tailwind CSS 4 Configuration (`app/globals.css`):**

```css
@theme {
  --color-primary: #C3B1FF;
  --color-background: #1E0031;
  --color-neutral-white: #FFFFFF;
  --color-neutral-offwhite: #C7C7C7;
  --color-neutral-dark-gray: #484848;
  --color-neutral-dark: #222222;
  --color-neutral-card: #1A1A1A;
  --color-neutral-black: #0A0A0A;
}
```

### 1.2 Typography

**Font Families:**
- **Display/Headings:** `Bebas Neue` (Regular 400)
- **Body/UI:** `Manrope` (Regular 400, Medium 500, Semi-Bold 600, Bold 700)

```typescript
// tokens/typography.ts

export const typography = {
  heading: {
    one: {
      fontFamily: 'Bebas Neue',
      fontSize: '101px',     // ~6.3rem
      fontWeight: 400,
      lineHeight: 0.9,
      letterSpacing: '0px',
    },
    two: {
      fontFamily: 'Bebas Neue',
      fontSize: '76px',      // ~4.75rem
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0px',
    },
    three: {
      fontFamily: 'Manrope',
      fontSize: '32px',      // 2rem
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0px',
    },
    five: {
      fontFamily: 'Manrope',
      fontSize: '16px',      // 1rem
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0px',
    },
  },
  body: {
    medium: {
      fontFamily: 'Manrope',
      fontSize: '18px',      // 1.125rem
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0px',
    },
    small: {
      fontFamily: 'Manrope',
      fontSize: '16px',      // 1rem
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0px',
    },
  },
  misc: {
    button: {
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
    tag: {
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0px',
    },
    link: {
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
    pill: {
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '0px',
      textTransform: 'uppercase',
    },
  },
} as const;
```

**Tailwind CSS 4 Configuration:**

```css
@theme {
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Manrope', sans-serif;
}
```

### 1.3 Spacing Scale

Extracted from design measurements (based on a **4px base unit**):

| Token       | Value  | Usage                                    |
| ----------- | ------ | ---------------------------------------- |
| `space-1`   | 4px    | Underline gaps, micro spacing            |
| `space-2`   | 8px    | Text gaps, label-to-input, inline gaps   |
| `space-3`   | 12px   | Button internal padding (vertical)       |
| `space-4`   | 16px   | Section gaps, card padding, form spacing |
| `space-5`   | 20px   | Button vertical padding                  |
| `space-6`   | 24px   | Icon gaps, nav item spacing, form gaps   |
| `space-8`   | 32px   | Section sub-gaps, skill chips gap        |
| `space-10`  | 40px   | Button horizontal padding, section gaps  |
| `space-12`  | 48px   | Project content gap, major gaps          |
| `space-15`  | 60px   | Page horizontal padding                  |
| `space-20`  | 80px   | Section vertical padding                 |
| `space-30`  | 120px  | Project card vertical gap                |

### 1.4 Border Radius

| Token         | Value    | Usage                              |
| ------------- | -------- | ---------------------------------- |
| `radius-sm`   | 4px      | Input fields                       |
| `radius-md`   | 12px     | Cards, project images              |
| `radius-lg`   | 16px     | Hero portrait image                |
| `radius-full` | 100px    | Buttons, pills, tags, icon circles |

### 1.5 Shadows & Elevation

The design uses a **flat/dark design** with no visible drop shadows. Elevation is achieved through:
- Background color differentiation (`#1E0031` → `#1A1A1A` → `#0A0A0A`)
- Border treatments (`1px solid #484848`)
- Layered depth through card backgrounds

---

## 2. Reusable Component Definitions

### 2.1 Navbar

```tsx
// components/layout/Navbar.tsx

interface NavbarProps {
  brandName: string;
  links: { label: string; href: string }[];
}
```

**Specs:**
- Height: 96px
- Horizontal padding: 60px
- Layout: `flex items-center justify-between`
- Brand text: `Bebas Neue`, 32px, color `neutral-offwhite`, tracking tight (-0.32px)
- Nav links: `Manrope Medium`, 16px, color `neutral-offwhite`, gap 32px, tracking tight (-0.48px)
- Sticky positioning at top
- Full width (1440px max, centered)

**Tailwind classes:**
```
w-full px-15 py-6 flex items-center justify-between sticky top-0 z-50
```

### 2.2 Hero Section

```tsx
// components/sections/Hero.tsx

interface HeroProps {
  greeting: string;
  name: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  portraitSrc: string;
  socialLinks: { platform: string; href: string; icon: React.ReactNode }[];
}
```

**Specs:**
- Two-column layout: content left (544px), image right (600px)
- Heading: `Bebas Neue` 101px, white, line-height 0.9
- Subtitle: `Manrope Regular` 18px, offwhite, line-height 1.5
- Content gap: 40px between heading block and actions
- Heading-to-subtitle gap: 8px
- Portrait: 600×689px, rounded-lg (16px)
- Content starts at 108px from left, 286px from top

### 2.3 Button

```tsx
// components/ui/Button.tsx

interface ButtonProps {
  variant: 'primary' | 'outline' | 'submit';
  size?: 'default';
  children: React.ReactNode;
  hasIcon?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
```

**Variants:**

| Variant   | Background   | Text Color      | Border            | Border Radius |
| --------- | ------------ | --------------- | ----------------- | ------------- |
| `primary` | `#C3B1FF`    | `#0A0A0A`       | none              | 100px (full)  |
| `outline` | transparent  | `#FFFFFF`        | 1px solid #484848 | 100px (full)  |
| `submit`  | `#C3B1FF`    | `#0A0A0A`       | none              | 100px (full)  |

**Dimensions:**
- Height: 54px
- Padding: 20px vertical, 24px left + 6px right (with icon) or 40px horizontal (no icon)
- Font: `Manrope Bold`, 16px, uppercase, line-height 1
- Primary variant includes circular icon (42px) on the right

### 2.4 Project Card

```tsx
// components/ProjectCard.tsx

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tag?: string;
  projectInfo: {
    client?: string;
    year: string;
    role: string;
  };
  links: {
    liveDemo?: string;
    github?: string;
    viewProject?: string;
  };
}
```

**Specs:**
- Full-width row layout: image left (600×600px) + content right (flex-1)
- Gap between image and content: 48px
- Image container: 600×600, bg `#1A1A1A`, rounded-md (12px), overflow hidden
- Tag badge: bg `#0A0A0A`, rounded-full (100px), px-16 py-8, positioned top-left (16px)
- Title: `Manrope Medium` 32px, white, line-height 1.4
- Description: `Manrope Regular` 18px, offwhite, line-height 1.5
- Project info: bordered list with `#484848` dividers, 16px padding vertical
- Info labels: `Manrope Medium` 16px white
- Info values: `Manrope Medium` 16px offwhite
- Project cards separated by 120px vertical gap

### 2.5 Skill Chip (Pill)

```tsx
// components/ui/SkillChip.tsx

interface SkillChipProps {
  label: string;
}
```

**Specs:**
- Border: 1px solid `#484848`
- Background: transparent
- Border radius: 100px (full pill)
- Padding: 20px vertical, 40px horizontal
- Font: `Manrope Bold`, 16px, white, uppercase, line-height 1
- Layout: flex wrap, gap 16px
- Container uses `flex-wrap` for responsive reflow

### 2.6 Contact Form

```tsx
// components/ContactForm.tsx

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

**Input Field Specs:**
- Background: `#1A1A1A`
- Border radius: 4px
- Padding: 12px vertical, 16px horizontal
- Font: `Manrope Regular`, 18px, white
- Label: `Manrope Medium`, 16px, offwhite, line-height 1.6
- Label-to-input gap: 8px
- Field-to-field gap: 24px
- Message field: taller (~156px height)
- Submit button below form with 40px gap

### 2.7 Footer / Contact Section

```tsx
// components/layout/Footer.tsx

interface FooterProps {
  heading: string;
  email: string;
  socialLinks: { platform: string; href: string; icon: React.ReactNode }[];
  copyright: string;
}
```

**Specs:**
- Two-column layout: left (info + social) / right (contact form)
- Gap between columns: 24px
- Section padding: 80px vertical
- Heading: `Bebas Neue` 76px, white
- Email: `Manrope Regular` 18px, white, with underline
- Social icons: 32×32px, gap 24px
- Copyright: `Manrope Medium` 16px, offwhite, positioned at bottom of left column

### 2.8 Experience Item

```tsx
// components/ExperienceItem.tsx

interface ExperienceItemProps {
  title: string;
  dateRange: string;
  subtitle: string;
  description: string;
}
```

**Specs:**
- Title: `Manrope Medium` ~20px, white
- Date: `Manrope Medium` 18px, offwhite, same line as title (right-aligned)
- Subtitle: `Manrope Medium` 18px, offwhite
- Description: `Manrope Regular` 18px, offwhite, line-height 1.5
- Items separated by 80px gap (with section dividers)

### 2.9 Section Header

```tsx
// components/ui/SectionHeader.tsx

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}
```

**Specs:**
- Title: `Bebas Neue` 76px, white, line-height 1
- Subtitle: `Manrope Regular` 18px, offwhite, line-height 1.5
- Title-to-subtitle gap: 8px

### 2.10 Link/CTA

```tsx
// components/ui/LinkCTA.tsx

interface LinkCTAProps {
  label: string;
  href: string;
  icon?: 'arrow' | 'github';
}
```

**Specs:**
- Font: `Manrope Bold`, 16px, color `#C3B1FF`, uppercase
- Underline below (2px solid, extends full width of text + icon)
- Icon: 24-26px, inline with text, gap 4px
- Underline gap from text: 4px

### 2.11 Social Icon Button

```tsx
// components/ui/SocialIconButton.tsx

interface SocialIconButtonProps {
  platform: 'linkedin' | 'github' | 'twitter' | 'instagram';
  href: string;
  size?: 'sm' | 'md';
}
```

**Specs:**
- Size `md`: 54×54px circle, bg `#222222`, icon 26×26px
- Size `sm`: 32×32px, no background (just icon)
- Border radius: full (100px)

---

## 3. Layout Rules

### 3.1 Page Structure

```
┌─────────────────────────────────────────┐
│ Navigation (sticky, full-width)          │
├─────────────────────────────────────────┤
│ Hero Section (2-column)                  │
├──── Divider Line ────────────────────────┤
│ Featured Projects                        │
├──── Divider Line ────────────────────────┤
│ About Me (2-column: title | content)     │
├──── Divider Line ────────────────────────┤
│ Contact / Footer (2-column: info | form) │
└─────────────────────────────────────────┘
```

### 3.2 Grid System

- **Max content width:** 1440px
- **Content area:** 1224px (108px padding each side)
- **Column gap (2-col sections):** 24–48px
- **Sections use a 2-column split:** 50/50 or title-left (small) / content-right (large)

### 3.3 Section Dividers

- Full-width horizontal lines (1440px)
- Color: `#484848`
- Separates major sections (Hero|Projects, Projects|About, About|Contact)

### 3.4 Container Pattern

```tsx
// components/layout/Container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[108px]">
      {children}
    </div>
  );
}
```

---

## 4. Responsive Rules

### 4.1 Breakpoints

| Breakpoint | Width      | Behavior                                         |
| ---------- | ---------- | ------------------------------------------------ |
| `mobile`   | < 768px    | Single column, stacked layout                    |
| `tablet`   | 768–1024px | Reduced padding, 2-col preserved where possible  |
| `desktop`  | > 1024px   | Full design as specified                         |

### 4.2 Mobile-First Adaptations

```css
/* Mobile-first approach */

/* Base (mobile): single column */
.section-container {
  @apply px-6 py-12;
}

/* Tablet */
@screen md {
  .section-container {
    @apply px-12 py-16;
  }
}

/* Desktop */
@screen lg {
  .section-container {
    @apply px-[108px] py-20 max-w-[1440px] mx-auto;
  }
}
```

### 4.3 Component Responsive Behavior

| Component      | Mobile                        | Tablet              | Desktop                 |
| -------------- | ----------------------------- | ------------------- | ----------------------- |
| Navbar         | Logo + hamburger menu         | Logo + nav links    | Full nav with links     |
| Hero           | Stacked: image above content  | Side-by-side        | Full 2-column           |
| Project Card   | Stacked: image → content      | Stacked             | Side-by-side (2-col)    |
| Skills         | Stacked: title → chips        | 2-column            | 2-column                |
| Contact/Footer | Stacked: info → form          | Stacked             | 2-column side-by-side   |
| Heading One    | 48px → 72px → 101px           | Scales with vw      | Fixed 101px             |
| Heading Two    | 40px → 56px → 76px            | Scales with vw      | Fixed 76px              |

### 4.4 Typography Scaling

```css
/* Responsive font sizes */
.heading-one {
  @apply text-5xl md:text-7xl lg:text-[101px];
  font-family: var(--font-display);
  line-height: 0.9;
}

.heading-two {
  @apply text-4xl md:text-6xl lg:text-[76px];
  font-family: var(--font-display);
  line-height: 1;
}
```

---

## 5. Accessibility Rules

### 5.1 Color Contrast

- Primary text (white `#FFFFFF` on `#1E0031`): ratio ~15:1 ✓ WCAG AAA
- Secondary text (offwhite `#C7C7C7` on `#1E0031`): ratio ~10:1 ✓ WCAG AAA
- Primary accent (`#C3B1FF` on `#0A0A0A`): ratio ~8.5:1 ✓ WCAG AAA
- Links (`#C3B1FF` on `#1E0031`): ratio ~7:1 ✓ WCAG AA (large text)

### 5.2 Semantic HTML Requirements

```html
<header>    → Navigation
<main>      → Page content
<section>   → Each major section (Hero, Projects, Skills, Contact)
<article>   → Individual project cards
<footer>    → Footer/Contact section
<nav>       → Navigation links
<h1>        → Hero heading (one per page)
<h2>        → Section headings (Featured Projects, My Skills, etc.)
<h3>        → Project titles
<form>      → Contact form
<label>     → All form inputs must have associated labels
```

### 5.3 Interactive Elements

- All links must have descriptive `aria-label` when using icons only
- Social icon buttons need `aria-label="Visit LinkedIn profile"` etc.
- Form inputs need proper `id`/`htmlFor` label associations
- Focus states: visible outline using `ring-2 ring-primary ring-offset-2 ring-offset-background`
- Skip-to-content link for keyboard users
- All images need meaningful `alt` text (or `alt=""` for decorative)
- Minimum touch target: 44×44px for mobile interactive elements

### 5.4 Motion & Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Implementation Rules

### 6.1 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind base + design tokens
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── ui/                  # Atomic/reusable components
│   │   ├── Button.tsx
│   │   ├── SkillChip.tsx
│   │   ├── LinkCTA.tsx
│   │   ├── SocialIconButton.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Input.tsx
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── FeaturedProjects.tsx
│       ├── Skills.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── lib/
│   ├── fonts.ts             # Font loading configuration
│   └── utils.ts             # cn() utility and helpers
├── data/
│   ├── projects.ts          # Project content data
│   ├── skills.ts            # Skills list
│   └── experience.ts        # Experience data
└── types/
    └── index.ts             # Shared TypeScript types
```

### 6.2 Font Loading (Next.js 15)

```tsx
// lib/fonts.ts
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const bebasNeue = localFont({
  src: '../public/fonts/BebasNeue-Regular.woff2',
  variable: '--font-display',
  display: 'swap',
});
```

### 6.3 Tailwind CSS 4 Configuration

```css
/* app/globals.css */
@import 'tailwindcss';

@theme {
  /* Colors */
  --color-primary: #C3B1FF;
  --color-background: #1E0031;
  --color-neutral-white: #FFFFFF;
  --color-neutral-offwhite: #C7C7C7;
  --color-neutral-dark-gray: #484848;
  --color-neutral-dark: #222222;
  --color-neutral-card: #1A1A1A;
  --color-neutral-black: #0A0A0A;

  /* Fonts */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Manrope', sans-serif;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 100px;
}

@layer base {
  body {
    @apply bg-background text-neutral-white font-body;
  }
}
```

### 6.4 Component Conventions

- Use function components with explicit return types
- Props interfaces defined in the same file (unless shared across 3+ components)
- Export as named exports for better tree-shaking
- Use `cn()` utility (clsx + tailwind-merge) for conditional classes
- Use `forwardRef` for interactive elements that need ref access
- Keep components pure — no side effects in render
- Prefer Server Components; use `'use client'` only when needed (forms, interactivity)

### 6.5 Styling Conventions

- **NEVER** hardcode color hex values — always use design tokens via Tailwind classes
- Use Tailwind utility classes exclusively (no inline styles)
- Use `@apply` sparingly — only for highly repeated patterns
- Responsive: mobile-first (`base` → `md:` → `lg:`)
- Spacing: prefer token-based values (`gap-4`, `p-6`) over arbitrary values
- When arbitrary values are needed, use CSS variables: `bg-primary` not `bg-[#C3B1FF]`

### 6.6 Data Separation

Content data should be extracted into typed data files:

```typescript
// data/projects.ts
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Promotional landing page for our favorite show',
    description: '...',
    image: '/images/projects/adventure-time.webp',
    tag: 'Conceptual Work',
    year: '2023',
    role: 'Front-end Developer',
    links: {
      liveDemo: 'https://...',
      github: 'https://...',
    },
  },
];
```

### 6.7 Performance

- Use Next.js `<Image />` component for all images (automatic optimization)
- Lazy load below-fold sections with dynamic imports where beneficial
- Optimize fonts with `next/font` (preload, subset, swap)
- Use `will-change` sparingly for animated elements
- Minimize client-side JavaScript — prefer Server Components where possible
- Images should use WebP format with appropriate `sizes` attribute

### 6.8 Animation Guidelines

Based on the design's clean, professional style:
- Subtle hover transitions: `transition-all duration-200 ease-in-out`
- Button hover: slight brightness or scale (`hover:brightness-110` or `hover:scale-105`)
- Link underline: animate width on hover
- Page scroll: consider subtle fade-in for sections (IntersectionObserver)
- Respect `prefers-reduced-motion` with `motion-safe:` prefix

---

## Quick Reference: Tailwind Class Mapping

| Design Token          | Tailwind Class               |
| --------------------- | ---------------------------- |
| Background            | `bg-background`              |
| Primary accent        | `bg-primary` / `text-primary`|
| White text            | `text-neutral-white`         |
| Offwhite text         | `text-neutral-offwhite`      |
| Card background       | `bg-neutral-card`            |
| Dark background       | `bg-neutral-dark`            |
| Border color          | `border-neutral-dark-gray`   |
| Display font          | `font-display`               |
| Body font             | `font-body`                  |
| Pill radius           | `rounded-full`               |
| Card radius           | `rounded-radius-md`          |
| Input radius          | `rounded-radius-sm`          |
| Section padding       | `py-20 px-6 md:px-12 lg:px-[108px]` |
| Nav link tracking     | `tracking-tight`             |

---

## Notes

- The design is desktop-first at 1440px; implementation should be mobile-first CSS with progressive enhancement
- The About page shares the same navigation and uses the same component library
- Section dividers are full-bleed horizontal lines at `#484848`
- The overall aesthetic is **dark, minimal, typographic** — let the content breathe with generous whitespace
- All interactive elements should provide clear hover/focus/active states
- Full WCAG validation requires manual testing with assistive technologies and expert accessibility review
