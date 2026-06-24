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

This is a **Next.js 16 site** for "Reino das Pipocas" (a popcorn brand), using the App Router with React 19 and Tailwind CSS v4.

### Routes

- `/` — Landing page (`src/app/page.tsx`). Composes all sections in order: `Header → Hero → Flavors → Features → Testimonials → OrderCTA → Footer`. Each section is a self-contained server component in `src/components/`.
- `/cardapio` — Mobile-optimized order page (`src/app/cardapio/page.tsx`). Client component (`"use client"`) with interactive product list, quantity controls, a bottom-sheet cart drawer, payment method selection, optional name/notes fields, and WhatsApp order submission.

### Products & pricing (defined in `/cardapio/page.tsx`)

| Product | Price |
|---|---|
| Pipoca com Queijo | R$ 13,00 |
| Pipoca Simples | R$ 10,00 |
| Batata | R$ 12,00 |
| Pipoca Doce | R$ 15,00 |

### Styling

Tailwind v4 with a custom amber-based brand palette defined in `src/app/globals.css` under `@theme inline`. The primary brand color tokens are `--color-brand-*` (amber scale) and `--color-red-pipoca`. Font is Poppins loaded via `next/font/google`, set as `--font-poppins` and aliased to `--font-sans`.

### Navigation

Landing page links between sections use anchor IDs (`#inicio`, `#sabores`, `#contato`). Smooth scrolling is enabled globally via `html { scroll-behavior: smooth }`. The `OrderCTA` section has two CTAs: direct WhatsApp link and a "Ver Cardápio" button linking to `/cardapio`.

### WhatsApp CTA

The WhatsApp number `5512988958766` is set in two places:
- `src/components/OrderCTA.tsx` — direct link with a generic pre-filled message
- `src/app/cardapio/page.tsx` (`WHATSAPP_NUMBER` constant) — sends a formatted order summary built from the cart contents
