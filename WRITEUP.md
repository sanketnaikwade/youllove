# Youllove Candies — Write-up

**Stack:** Vite + React + Framer Motion. React earns its place because both
flavor sections are structurally identical — a single data-driven
`FlavorSection` renders both from `data/flavors.js`, so they can never drift
apart. Framer Motion's `useScroll`/`useTransform` map scroll position straight
to compositor-friendly motion values (transforms, `scaleX`, color), keeping
scroll-driven animation off React's render/state path.

**Scroll interactions:**
1. **Page-wide color morph** — one fixed layer's color is driven by global
   scroll, travelling intro → hot watermelon world → deep blueberry world →
   CTA, so the whole page reads as one continuous journey rather than
   isolated sections.
2. **Sticky, scroll-linked candy** — each flavor pins while its section
   scrolls; the lollipop rotates and scales, direction flipped per flavor by a
   prop.
3. **Hero parallax** — background glows and the candy move at different rates.
4. **Velocity-reactive marquee + progress bar** — the ingredient strip skews to
   scroll velocity; a gradient bar tracks overall progress.

Staggered copy reveals fire once per section. `MotionConfig reducedMotion="user"`
disables all of it in one place for that preference.

**Trade-offs:** copy is Lorem Ipsum per the brief; the candies are pure CSS
(no image assets) for iteration speed; email capture is a front-end placeholder
with no backend.
