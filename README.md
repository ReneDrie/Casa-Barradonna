# Casa Barradonna

A bilingual Astro website for a future two-bedroom holiday apartment in Los Alcázares. The public pages are statically generated; Sanity is the editing layer. Booking requests use separate Cloudflare Pages Functions and are **closed by default**.

See [the project roadmap](ROADMAP.md) for prioritized TODOs, launch requirements, and later improvements.

**Temporary live preview:** [casa-barradonna.pages.dev](https://casa-barradonna.pages.dev/en/) · [Nederlands](https://casa-barradonna.pages.dev/nl/). Cloudflare Pages builds from the `main` branch of [ReneDrie/Casa-Barradonna](https://github.com/ReneDrie/Casa-Barradonna) on every push. Search indexing and booking requests are disabled for this preview.

## Current preview

- English and Dutch pages: home, apartment, Los Alcázares, about, request.
- Reusable Sanity sections: hero, facts, introduction, image and text, feature cards, gallery, quote, FAQ, call to action, booking form.
- Local seed content is used until a Sanity project is connected.
- The owners' ceramic tile logo is the site mark. Its original file is in `assets/brand/cbd-logo.png`; the supplied transparent website version is `public/brand/casa-barradonna-tiles-transparent.webp`. The colors, tile trim, and subtle plaster texture are drawn from that logo.
- The two illustrations in `public/images/` are original generated mood artwork. They are not photos of the apartment or a factual depiction of its surroundings. Replace them with the owners' original photos after handover.
- Handover is expected at the end of Q1 2027. April 1, 2027 and a three-night minimum are planning defaults, not confirmed rental terms.
- No contact details or Airbnb listing are available yet. The request form cannot submit in the preview.

## Run locally

```sh
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:4321/en/` or `/nl/`. Run `npm run check`, `npm run build`, and `npm run test:booking` before a release.

## Connect Sanity

1. The Sanity project `b5rbq1la` and its public `production` dataset are connected in `.env.example`. Copy that file to `.env` for local development, and set the same project ID and dataset in the hosting build environment. The project ID is not a secret key; editors sign in to Sanity separately. The dataset currently has no page documents, so the site continues to use local seed pages until content is imported or published.
2. Start the editor with `npm run studio`. Sanity sign-in is required for editing. The Studio source is in `sanity.config.ts` and `studio/schemaTypes/`.
3. After signing in with an editor account, on a **new, empty dataset only**, import the 10 prepared page documents: `npx sanity dataset import studio/seed.ndjson production`. The seed can be regenerated from the local copy with `npm run cms:seed:export`. Do not reimport after editors have begun changing content: doing so could overwrite their work.
4. The website fetches published Sanity content at build time. If a core page is not yet in Sanity, its local seed copy remains available. Studio changes therefore require a new site build before they appear publicly.
5. On Cloudflare Pages, create a Deploy Hook and connect a Sanity webhook for published `page` changes. Keep the hook URL private. [Cloudflare's Deploy Hook documentation](https://developers.cloudflare.com/pages/configuration/deploy-hooks/) describes this flow.

The five core URLs are defined in `src/lib/routes.ts` and should stay fixed. Editors can create new pages by choosing a new stable `pageKey` and a unique slug in each language. Use the same `pageKey` for the English and Dutch versions so the language switch links them. New pages are generated on the next build. Links to new pages can be added through CMS call-to-action fields; adding them to the main navigation requires a code change.

## Deploy the public site

Cloudflare Pages uses this repository with build command `npm run build` and output directory `dist`. The `functions/api/` directory supplies the two booking endpoints. The temporary Pages URL is set as `PUBLIC_SITE_URL` in the build environment; replace it with the real domain before launch.

The site is deliberately marked `noindex` and its generated `robots.txt` blocks crawlers while `PUBLIC_SITE_LIVE=false`. Change this to `true` only after the real domain, content, photos, and required rental details have been approved. The sitemap and language alternates are generated with the build.

## Open booking requests

The form is request-to-book, not instant booking. It sends one owner notification through Resend; the owners check the dates and reply personally. There is no online payment or automatic confirmation.

Before changing the flags to `true`:

1. Confirm the first rentable date, minimum stay, guest capacity, pricing, house rules, cancellation terms, and required rental registration information.
2. Add the real contact address and a reviewed privacy notice for the booking form.
3. Verify a sending domain with Resend and set `RESEND_API_KEY`, `BOOKING_TO_EMAIL`, and `BOOKING_FROM_EMAIL` as Cloudflare environment secrets.
4. Create a Cloudflare Turnstile widget and set `PUBLIC_TURNSTILE_SITE_KEY` at build time and `TURNSTILE_SECRET_KEY` as a server secret.
5. Set `PUBLIC_BOOKING_REQUESTS_ENABLED=true` at build time and `BOOKING_REQUESTS_ENABLED=true` on the Cloudflare Pages Function. Both switches must be enabled.
6. Set `PUBLIC_FIRST_REQUEST_DATE` to the approved first date. The server uses the same value if it is configured there; otherwise it defaults to `2027-04-01`.
7. When the Airbnb listing exists, add its **exported iCal URL** as the server-only `AIRBNB_ICAL_URL`. The availability endpoint exposes only `available`, `blocked`, or `unknown`, never calendar event details or the feed URL.
8. Test a real request end to end using controlled test data, including delivery and a calendar conflict, before accepting guests.

Airbnb calendar synchronisation is delayed and cannot be treated as a live reservation lock. The website labels availability as indicative. An imported website calendar can block Airbnb dates, but does not create an Airbnb booking. [Airbnb calendar documentation](https://www.airbnb.com/help/article/99).

## Future booking portal

For the first launch, a shared owner inbox can handle requests. If the volume justifies a portal, build it as a separate authenticated application with a reservation database, statuses (`new`, `on hold`, `confirmed`, `declined`), an audit trail, and a calendar feed. Ricardo, Nancy, and the site manager would get individual logins. Guest information belongs there rather than in Sanity. A managed authentication service should handle login and account recovery; do not build custom passwords into the CMS. A channel manager is the better route if instant direct bookings and stronger Airbnb synchronisation become requirements.

## Artwork prompts

Both assets were generated with the built-in image generation tool and converted to WebP for this project.

- `coastal-hero.webp`: a wide, contemporary hand-painted illustration inspired by the Mar Menor, with calm sea, pale sand, palms, whitewashed architecture, turquoise pool motif, and generous left-side space for a headline; no people, logos, text, or claim to show the real property.
- `coastal-still-life.webp`: a contemporary hand-painted Mediterranean holiday still life with striped towel, oranges, ceramic jug, book, sunglasses, and distant sea; no people, text, logos, or apartment interior.
