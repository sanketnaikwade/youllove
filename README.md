# Youllove Candies

A single-page, scroll-interactive landing page for a fictional candy brand.
Built with Vite + React + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

Outputs a static `dist/` folder. Drag it onto
[app.netlify.com/drop](https://app.netlify.com/drop) for an instant public
link, or connect the repo to Vercel/Netlify for git-based deploys.

## What to look for

- **Scroll the whole page slowly.** The background color morphs continuously
  from the intro through the watermelon world, the blueberry world, and into
  the CTA — the whole page is one scroll journey.
- Each flavor's lollipop **pins and spins/scales** as its section passes.
- Hero **parallax**, a **velocity-reactive** ingredient marquee, staggered
  copy reveals, and a gradient scroll **progress bar**.
- Resize to ~375px — sections stack candy-above-text, no horizontal scrollbar.
- Turn on "reduce motion" in your OS: animation stops, the page still reads.

> Note: scroll animations are driven by `requestAnimationFrame`, which browsers
> pause for hidden/backgrounded tabs. Always view in a visible, focused tab.

## Project structure

```
src/
  App.jsx                  — assembles all sections
  data/flavors.js          — flavor content/config (single source of truth)
  components/
    ScrollBackground.jsx   — page-wide scroll-driven color morph (global useScroll)
    Nav.jsx                — translucent-on-scroll bar
    ProgressBar.jsx        — global scroll progress (scaleX on the compositor)
    Hero.jsx               — parallax scoped to the hero's own scroll range
    Candy.jsx              — shared glossy lollipop, pure CSS; used by Hero + FlavorSection
    FlavorSection.jsx      — ONE component for both flavors, driven by props/data
    IngredientStrip.jsx    — velocity-reactive marquee
    CTA.jsx                — email capture with animated success state
    Footer.jsx
  styles/
    tokens.css             — palette (two flavor worlds), type, motion tokens
    global.css             — reset, film-grain overlay, reduced-motion guard
```

To add a third flavor: add an entry to `data/flavors.js` and a matching CSS
variant block in `Candy.module.css` / `FlavorSection.module.css`.
`FlavorSection.jsx` itself doesn't change.
