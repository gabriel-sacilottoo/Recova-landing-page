# Aston — coded template

A production-ready recreation of the **Aston** Framer template as a Next.js
application. Built with the App Router, TypeScript, Tailwind CSS v4 and Motion.

The blog is intentionally not part of this template: there are no blog routes,
components, assets or navigation links.

---

## Installation

```bash
npm install
```

Node 20 or newer is required.

## Development commands

```bash
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on <http://localhost:3020> |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Production build

```bash
npm run build && npm run start
```

Every route prerenders as static HTML.

---

## Project structure

```
public/
  fonts/                 Clash Grotesk woff2 files
  images/
    avatars/             People photography
    backgrounds/         Section backdrops, grids, light rays
    icons/               UI icons, section badges, feature glyphs
      badge/  feature/  list/  nav/  ticker/
    illustrations/       Product UI artwork, device screens
    logos/               Wordmarks, glyphs, trusted-by marquee
src/
  app/
    layout.tsx           Fonts, metadata, JSON-LD, skip link
    page.tsx             Home
    pricing/  contact/  waitlist/  changelog/  privacy-policy/
    not-found.tsx        Custom 404
    robots.ts  sitemap.ts
    globals.css          Design tokens, breakpoints, utilities, keyframes
  components/
    layout/              Header, Footer, PageBackdrop
    sections/            One file per page section
    ui/                  Button, SectionBadge, SectionHeading, Accordion,
                         Marquee, FeatureCard, PricingCard, forms
  config/site.ts         Single source of truth for brand and navigation
  data/                  Typed page content
  lib/                   Fonts, motion tokens, form transport
```

---

## Editing site content

**Brand, navigation, CTAs, socials, footer, SEO defaults** live in
[`src/config/site.ts`](src/config/site.ts). Changing the site name, adding a nav
item or swapping a CTA link only requires editing that file.

**Page content** lives in typed data modules:

- [`src/data/home.ts`](src/data/home.ts) — every home-page section
- [`src/data/pages.ts`](src/data/pages.ts) — pricing table, contact, waitlist,
  changelog entries, privacy policy, 404

Each export is typed, so adding a pricing feature or a team member is a matter
of extending an array — no layout code changes.

## Updating images

Drop replacements into the matching folder under `public/images/` and update the
path in the relevant data file. Keep the original aspect ratio: several sections
(the "What's In" cards, the About collage, the mobile-app card) derive their
height from the artwork's ratio, which is why `src/data/home.ts` records an
`aspect` value per card.

All images render through `next/image`; below-the-fold media lazy-loads by
default and the hero assets are marked `priority`.

## Changing fonts

Three families are used:

| Role | Family | Loaded via |
| --- | --- | --- |
| Display / headings | Clash Grotesk (500, 600, 700) | Self-hosted woff2 in `public/fonts` |
| Body / UI | Instrument Sans | `next/font/google` |
| Rating numerals | Manrope | `next/font/google` |

Edit [`src/lib/fonts.ts`](src/lib/fonts.ts) to swap a family, then update
`--font-display`, `--font-sans` or `--font-numeric` in
[`src/app/globals.css`](src/app/globals.css).

Clash Grotesk is distributed by [Fontshare](https://www.fontshare.com/fonts/clash-grotesk)
under the ITF Free Font Licence. The woff2 files here are the same ones the
original Framer project serves. Check the licence before redistributing.

## Changing colors

All colours are design tokens in the `@theme` block of
[`src/app/globals.css`](src/app/globals.css). Change `--color-accent` and the
buttons, links, checkmarks and figures follow. The ink ramp
(`--color-ink-900` → `--color-ink-50`), surfaces, borders, radii and motion
easings are defined there too — no colour values are hard-coded in components
except where a gradient or shadow is reproduced verbatim from the original.

## Editing pricing

Plans live in `pricing.plans` in [`src/data/home.ts`](src/data/home.ts):

```ts
{
  name: "Team Plan",
  audience: "2 to 20 users",
  price: "$30/m",
  features: [...],
  activeCount: 7,   // leading features shown as included
  layout: "card",   // "card" or "panel" (the wide Enterprise block)
}
```

The comparison matrix on `/pricing` is `pricingPage.rows` in
[`src/data/pages.ts`](src/data/pages.ts). A cell may be a string (rendered as
text) or `true`/`false` (rendered as a tick or a cross).

## Connecting the contact and waitlist forms

Both forms post through one function:
[`src/lib/submitForm.ts`](src/lib/submitForm.ts).

The quickest route is an environment variable — no code changes:

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT=https://your-endpoint.example.com/submit
```

The endpoint receives `POST` JSON of `{ form: "contact" | "waitlist", ...fields }`.

For anything more involved (a Next.js Route Handler, Resend, Formspree,
ConvertKit, an CRM webhook), replace the body of `submitForm`. Validation,
loading, success and error states are handled in the form components and keep
working unchanged.

With no endpoint configured the handler resolves after a short delay so the
states remain demonstrable in development.

## Deployment

### Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new). The framework is
   detected automatically; no build settings are needed.
3. Add `NEXT_PUBLIC_FORM_ENDPOINT` under **Settings → Environment Variables** if
   you are wiring up the forms.
4. Update `siteConfig.url` in `src/config/site.ts` to your production domain so
   canonical URLs, Open Graph tags and the sitemap resolve correctly.

### Other platforms

The app is a standard Next.js 15 project and runs anywhere Node 20+ is
available:

- **Netlify** — the Next.js runtime handles it with no configuration.
- **Cloudflare Workers / Pages** — use `@opennextjs/cloudflare`.
- **Docker / self-hosted** — add `output: "standalone"` to `next.config.ts`,
  then `npm run build` and run `node .next/standalone/server.js`.
- **Static export** — the site has no server-side data, so adding
  `output: "export"` works if you also set `images.unoptimized: true`.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `section`, `figure`).
- Skip link to the main content.
- Keyboard-operable navigation, dropdown and mobile menu, with Escape to close
  and outside-click dismissal.
- Accordions use `button` + `aria-expanded` + `aria-controls`.
- Forms have real `label` elements, `aria-invalid`, error messages tied via
  `aria-describedby`, and a polite live region for status.
- Visible focus rings throughout.
- `prefers-reduced-motion` pauses every marquee and neutralises the hero
  entrance.

## Animation fidelity

Timings were read out of the published project rather than eyeballed:

| Motion | Source value | Where |
| --- | --- | --- |
| Hero light rays | tween 0.7s, 1s delay, `cubic-bezier(.12,.23,.5,1)`, from `opacity 0 / scale .5 / x∓200 / y-200` | `src/lib/motion.ts` |
| Hero widget columns | tween 1s, 0.7s delay, same easing, from `x∓201` (∓111 on tablet) | `src/lib/motion.ts` |
| Hero badge | spring `stiffness 150 / damping 30`, 0.1s delay | `src/lib/motion.ts` |
| Hero headline → visual | spring `stiffness 150 / damping 50`, delays 0.2 / 0.3 / 0.4 / 0.5 / 0.6s; the headline also rotates in from `rotateX 30` | `src/lib/motion.ts` |
| Ticker speed | 30 px/s on all nine tickers except the app-screen strip at 50 px/s | `src/components/ui/Marquee.tsx` |
| Ticker direction | highlight rows left/right/left; testimonial columns up/down/up | section components |
| Ticker edge fade | 25% each side, and only on the tickers the source fades | `globals.css` |
| Counting figures | 2,548→2,648 / 121→221 / 197→297, one step per 20ms, on first scroll into view | `src/components/ui/CountUp.tsx` |
| Primary button hover | fill `#3384FF → #4C93FF`, inset glow `0 0 20px 8px transparent → 0 0 8px 6px #3384FF` | `src/components/ui/Button.tsx` |
| Accordion | spring `bounce .2 / duration .4` | `src/lib/motion.ts` |
| "What's In" beams | looping MP4 tinted by a `mix-blend-mode: color` fill, two copies rotated ±30° | `src/components/ui/BeamVideo.tsx` |

Because ticker speed is expressed in pixels per second, `Marquee` measures its
content and derives the CSS duration from it — so a row keeps the same visual
pace after you add or remove items, and at every breakpoint.

## Performance

- Server Components by default; `"use client"` only on the header, hero,
  accordions and forms.
- Marquees are CSS transforms with `will-change`, not JS loops.
- Images go through `next/image` with AVIF/WebP output and explicit `sizes`.
- Total First Load JS is roughly 155 kB on the heaviest route.

---

## Known differences from the Framer version

1. **Blog removed.** The original has a blog index and six articles, plus a
   "Our Blogs" section between Process and FAQ on the home page and blog links
   in the nav and footer. All of it is excluded per the project brief. The
   200px section rhythm is unchanged, so no gap is left behind.
2. **The "All Pages" menu is a reconstruction.** Framer renders that panel
   client-side only, so its open state was never in the served markup. The
   metrics used here (235px panel, 20px padding, 14px row gap, 195px rows,
   20px icons with a hover swap) were read from the component's compiled CSS,
   but the open/close animation is our own spring rather than a measured one.
   The same panel serves the tablet and mobile hamburger.
3. **"What's In" beams are a video.** The two light beams are the same looping
   MP4 the source uses (`public/video/community-beam.mp4`, ~4.7 MB), played
   twice and recoloured by a `mix-blend-mode: color` fill. It is marked
   `preload="none"` where the source uses `preload="auto"`, so browsers defer
   the fetch until the muted autoplay element is near the viewport. Re-encode
   or swap the clip if you want it lighter — it is purely decorative and the
   beams degrade to flat navy without it.
4. **Video players are static.** The hero, mobile-app and waitlist thumbnails
   render as images with a play affordance, as they do in the original before
   interaction. Wire up your own player on click if you need playback.
5. **Original copy is preserved verbatim**, including its typos — "Helpin
   focusing on what truly matters first.", "Join Watlist", and "the Pavyon
   you're searching for" on the 404 page. Fix these in the data files if you
   would rather not ship them.
6. **Fonts.** Instrument Sans and Manrope are served by `next/font/google`
   rather than as static files; rendering is identical, delivery differs.

## Credits

- Original design: **Aston** template by [Praha](https://www.framer.com/@praha/).
- Clash Grotesk by the [Indian Type Foundry](https://www.fontshare.com/fonts/clash-grotesk).
- Instrument Sans and Manrope via Google Fonts.

See [LICENSE](LICENSE) for the licence placeholder and
[CHANGELOG.md](CHANGELOG.md) for release notes.
