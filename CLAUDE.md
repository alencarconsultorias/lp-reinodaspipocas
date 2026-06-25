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

Most products use **size-based pricing** defined as named constant arrays. Only Pipoca Simples has a single fixed price.

| Product | Pricing model | Sizes / Price |
|---|---|---|
| Pipoca com Queijo | Sizes | P R$6 · M R$8 · G R$10 · GG R$15 · Família R$18 |
| Queijo Puro | Sizes | P R$5 · M R$6 · G R$12 |
| Pipoca Simples | Fixed | R$10 |
| Batata | Sizes | Mini R$8 · P R$10 · M R$15 · G R$18 · GG R$20 · Família R$25 |
| Pipoca Doce | Sizes + flavor | Same sizes as Batata — flavor must be chosen first (Chocolate Branco / Ao Leite / Mista) |

Cart keys are namespaced: `productId|sizeLabel` for sized products, `productId|sizeLabel|flavor` for flavored products, bare `productId` for fixed-price products.

### Styling

Tailwind v4 with a custom amber-based brand palette defined in `src/app/globals.css` under `@theme inline`. The primary brand color tokens are `--color-brand-*` (amber scale) and `--color-red-pipoca`. Font is Poppins loaded via `next/font/google`, set as `--font-poppins` and aliased to `--font-sans`.

### Navigation

Landing page links between sections use anchor IDs (`#inicio`, `#sabores`, `#contato`). Smooth scrolling is enabled globally via `html { scroll-behavior: smooth }`. The `OrderCTA` section has a single CTA button ("Pedir pelo WhatsApp") that links to `/cardapio`.

### WhatsApp CTA

The WhatsApp number `5512988958766` is used only in `src/app/cardapio/page.tsx` (`WHATSAPP_NUMBER` constant) — sends a formatted order summary built from the cart contents. `OrderCTA.tsx` no longer has a direct WhatsApp link; it routes the user to `/cardapio` instead.

### Delivery channels

The `Features` section (`src/components/Features.tsx`) has a highlighted "Entrega Rápida" banner with direct links to iFood and 99 Food. Operating hours: todos os dias exceto Terças-feiras, 17h–21h.
