# Tactical Scale UI/UX and Copywriting Design Rules

All code, UI components, styles, and documentation in this repository must strictly follow these five anti-AI-slop design and copywriting rules:

## 1. Color Palette (No AI Neon or Purple Gradients)
* Strictly forbid purple gradients, neon rose/pink accents, glowing buttons, and multi-colored rainbow badges.
* Use a restrained, authoritative executive palette: Slate/Zinc neutrals (`slate-950`, `slate-900`, `slate-600`, `slate-100`, `white`) with a single understated primary accent (`sky-700` or `blue-700` on light backgrounds, `sky-400` on dark backgrounds).

## 2. Layout & Card Discipline (Avoid Wall-to-Wall Cards)
* Do not wrap every piece of text in a `rounded-2xl` shadow card.
* Use editorial typography, clean horizontal hairline dividers (`border-slate-200`), structured architectural grids, and sharp or subtly rounded corners (`rounded-lg` max).
* Reserve bordered cards strictly for interactive portfolio items.

## 3. Icon & Emoji Restraint
* Never use `Sparkles`, rocket icons (`Rocket`), pulsing status dots (`animate-pulse`), or emojis.
* Use icons sparingly, strictly for functional navigation, external links, or media playback controls.

## 4. Refined Micro-Interactions
* Use precise, natural motion specs: `250ms` transition duration (`duration-250`) with `cubic-bezier(0.16, 1, 0.3, 1)` easing (`ease-out`), subtle `2px` to `4px` vertical hover translations or `16px` entrance offsets, and crisp border color shifts instead of bouncy scaling.

## 5. KISS Copywriting & Zero Em-Dashes
* Never use em-dashes or en-dashes anywhere in UI text, code strings, or markdown files. Use commas, colons, or periods instead.
* Keep all copy concise, concrete, and free of generic AI buzzwords.


## Pre-Push Verification Gate (Mandatory)

Before committing or pushing any changes to `main`, complete all three checks below and fix any failures locally:

1. **Code, Typography & Privacy Check:** Run `npx tsc --noEmit && npm run build` (exit code `0`), confirm zero em-dashes (`\u2014`) or en-dashes (`\u2013`) across `src/` and `docs/`, confirm `private_docs/` stays untracked (`git status --short`), and ensure all items in `PORTFOLIO_ITEMS` satisfy `PortfolioItem`.
2. **Live Desktop & Mobile Render Check:** Start the local preview server (`npm run preview`) and inspect the rendered application at both **Desktop (`1440x900`)** and **Mobile (`390x844`)** with zero browser console errors, zero horizontal page overflow, working interactive controls (filters, interactive layers, mobile menu, external links), and visual verification across all three blueprint modal variants (`flagship-hybrid-cloud`, `ai-pipeline`, `infra-stack`).
3. **Zero Fabricated Claims:** Never invent metrics, client quotes, or project outcomes; use only verified data provided by the user.
