# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (uses webpack bundler explicitly)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 landing page** for "Reino das Pipocas" (an artisanal popcorn brand), using the App Router with React 19 and Tailwind CSS v4.

**Single-page layout** — `src/app/page.tsx` composes all sections in order: `Header → Hero → Flavors → Features → Testimonials → OrderCTA → Footer`. Each section is a self-contained server component in `src/components/`.

**Styling** — Tailwind v4 with a custom amber-based brand palette defined in `src/app/globals.css` under `@theme inline`. The primary brand color tokens are `--color-brand-*` (amber scale) and `--color-red-pipoca`. Font is Poppins loaded via `next/font/google`, set as `--font-poppins` and aliased to `--font-sans`.

**Navigation** — All links between sections use anchor IDs (`#inicio`, `#sabores`, `#contato`). Smooth scrolling is enabled globally via `html { scroll-behavior: smooth }`.

**WhatsApp CTA** — The order flow (in `OrderCTA.tsx` and `Hero.tsx`) links to `https://wa.me/{number}` with a pre-filled message. The WhatsApp number in `OrderCTA.tsx` is a placeholder (`5511999999999`) that must be updated before launch.

**No routing, API routes, state management, or external data fetching** — this is a static marketing page.
