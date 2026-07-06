# Cottage Portfolio — Frontend Developer

Warm, editorial personal portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.tsx      Fonts (Cormorant Garamond + Inter), metadata
  page.tsx         Composes all sections in order
  globals.css      Paper-grain texture, base styles, dividers
components/
  Header.tsx       Sticky nav
  Hero.tsx         Headline + portrait placeholder
  Projects.tsx     Project cards grid
  Skills.tsx       Badge grid
  Experience.tsx   Timeline
  About.tsx        Editorial bio layout
  Contact.tsx      Contact card
  Footer.tsx
  ui/
    Button.tsx
    Badge.tsx
    SectionHeading.tsx
lib/
  data.ts          All copy: projects, skills, experience, contact — edit here
```

## Customizing

- **Your content**: edit `lib/data.ts` — projects, skills, experience, and contact links all live there.
- **Your photo**: swap the organic placeholder blobs in `Hero.tsx` and `About.tsx` for an `<Image />` once you have a portrait.
- **Resume**: drop your PDF into `public/` as `maren-holt-resume.pdf`, or update the path in `lib/data.ts`.
- **Palette**: all colors are tokenized in `tailwind.config.ts`.
