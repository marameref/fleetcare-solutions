# FleetCare Solutions — standalone React app

The site is a Vite + React + TypeScript + Tailwind CSS single-page app. All UI lives in
plain React components with no Lovable runtime dependency:

```
index.html            -> SPA entry (SEO meta, JSON-LD, favicon, fonts)
src/main.tsx          -> React root
src/App.tsx           -> renders the whole landing page
src/components/       -> Header, Footer, MobileCtaBar
src/sections/         -> Hero, Services, WhyChooseUs, Pricing, ServiceAreaCta, About, Testimonials
src/data/site.ts      -> content + contact links (phone, SMS, WhatsApp, service areas, testimonials)
src/hooks/            -> useScrolled
src/assets/           -> logo + hero image
src/styles.css        -> Tailwind v4 theme tokens (navy / gold palette, shadows, animations)
public/               -> favicon, robots.txt
```

## Local development

```bash
npm install
npm run dev:spa      # http://localhost:5173
npm run build:spa    # outputs dist-spa/
npm run preview:spa
```

`npm run dev` / `npm run build` are the Lovable (TanStack Start) pipeline and still work —
`src/routes/index.tsx` simply renders the same `<App />`. For GitHub export you only need
the `:spa` scripts.

## Netlify

`netlify.toml` is already configured: build `npm run build:spa`, publish `dist-spa`, with an
SPA redirect to `/index.html`.

## Vercel

`vercel.json` sets the same build command, output directory and rewrite.

## GitHub Pages

Build with a base path matching the repo name, then publish `dist-spa`:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build:spa
```

## Environment variables

None are required. `.env.example` documents the optional `VITE_BASE_PATH` used only for
GitHub Pages. No API keys or secrets are used anywhere in the frontend.
