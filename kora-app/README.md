# KORA — Next.js site

A Bangladesh-born training brand. Built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + shadcn/Radix**.

## Run it locally

You need Node 18.18+ (you have Node 22). In a terminal:

```bash
cd C:\Users\user\kora\kora-app
npm install        # first time only — downloads dependencies
npm run dev        # starts the dev server
```

Then open **http://localhost:3000** in your browser. Edit any file in `src/` and it hot-reloads.

> This is a real app — it does NOT open by double-clicking an HTML file anymore. It runs through `npm run dev` (local preview) and is deployed to put it online.

## Make the waitlist actually capture emails

1. Create a free form at **https://formspree.io** (takes a minute).
2. Copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `src/components/waitlist-form.tsx` → `FORMSPREE_ENDPOINT`.

Until then the form shows an "add your Formspree ID" message on submit.

## Put it online (free)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Or push the folder to a GitHub repo and import it at **vercel.com/new**. Add your real domain in the Vercel dashboard.

## Before launch — replace placeholders

- `hello@kora.example` (in `src/components/site-footer.tsx`)
- The Formspree endpoint (above)
- Swap the AI images in `public/assets/` for real product photography

## Structure

```
src/
  app/
    layout.tsx        # fonts, header/footer, metadata
    page.tsx          # home
    about/page.tsx
    shop/page.tsx
    globals.css       # design tokens (bone / clay / ink) + Tailwind v4 theme
  components/
    site-header.tsx   # nav (client)
    site-footer.tsx
    waitlist-form.tsx # email capture (client)
    image-tile.tsx
    ui/               # shadcn components (button, input)
  lib/utils.ts
public/assets/        # images
```

## Add more shadcn components later

```bash
npx shadcn@latest add dialog accordion card
```
