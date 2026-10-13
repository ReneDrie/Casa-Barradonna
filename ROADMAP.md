# Casa Barradonna roadmap

Updated 13 October 2026. This is the working backlog for the website and booking workflow. Check items off when the stated outcome is verified, and revise the defaults as the apartment and rental plans become definite. The expected handover is the end of Q1 2027; the first rentable date is still to be confirmed.

## Already in the preview

- [x] Bilingual English and Dutch Astro pages for home, apartment, Los Alcázares, about, and booking requests.
- [x] Responsive design using the owners' ceramic tile logo, tile details, plaster texture, and illustrative mood artwork.
- [x] Reusable Sanity page sections and local content that works before a Sanity project is connected.
- [x] Static builds with page metadata, language alternates, sitemap, and prelaunch search blocking.
- [x] A request-to-book form and server endpoints prepared behind disabled launch switches.
- [x] Optional Airbnb iCal availability lookup prepared for when a listing exists.

The preview artwork is illustrative. The current apartment facts, booking dates, and contact information are planning content, not approved guest information.

## P0 · Next content and design iteration

- [ ] **Owner + developer — Confirm property facts.** Record maximum guests, bed sizes and configuration, bathrooms, floor and lift access, air conditioning/heating, kitchen equipment, outdoor space, accessibility, parking arrangements, Wi-Fi, and pool rules. Publish only verified details in both languages.
- [ ] **Owner — Supply original media after handover.** Gather a clear exterior/arrival photo, each bedroom, bathroom, kitchen/living area, pool, and nearby beach. Confirm usage rights and identify what each image actually depicts. Replace illustrations where property photography is needed; keep any illustration only where its role is obvious.
- [ ] **Owner + developer — Approve brand and copy.** Review the logo at small sizes, the warm English/Dutch wording, and the story behind Casa, Barra, and Donna. Resolve whether the family names and personal details should appear publicly.
- [ ] **Owner — Verify location claims.** Confirm the address, distance to the beach, pool access, parking, and the attractions mentioned on the site. Decide whether to publish an exact map pin or a broader location until booking.
- [ ] **Developer — Complete the media pass.** Add image alt text, responsive crops, dimensions, and compressed formats for approved photos. Check mobile composition and page speed after replacing artwork.

**Done when:** both language versions match the verified property, and the owners approve the logo, text, and images.

## P1 · CMS and publishing setup

- [x] **Owner/client — Create the Sanity project.** Project `b5rbq1la` has a public `production` dataset, and its ID is in the local configuration template.
- [ ] **Owner/client — Set up editor access.** Give each editor an individual login and the access needed for content updates.
- [ ] **Developer — Import the prepared seed into an empty dataset.** Import once, then review every page in Studio. Avoid reimporting over editorial changes.
- [ ] **Developer — Connect publishing to deployment.** Add the Sanity publish webhook and Cloudflare Pages Deploy Hook. Verify that an edit in either language reaches the public site after a successful rebuild.
- [ ] **Developer + editors — Test the editing workflow.** Change text, image, FAQ, and a reusable section; publish and check desktop/mobile output. Write a short editor guide covering paired EN/NL pages, image credits, and safe publishing.
- [ ] **Developer — Decide on editorial preview.** Add a protected preview or staging view if editors need to review unpublished pages before publishing; keep draft content out of public static builds.

**Done when:** the client can edit and publish a page without developer help, and a failed build is visible to the site manager.

## P1 · Launch readiness and request-to-book

- [ ] **Owner — Set the first rentable date.** Replace the provisional 1 April 2027 date once handover, furnishing, photography, and any licensing are complete. Decide whether the site should go public earlier as a prelaunch site with requests closed.
- [ ] **Owner — Approve booking terms.** Set maximum guests, minimum/maximum stay, arrival and departure times, prices and any fees, deposit, payment method and timing, cancellation terms, house rules, and response target. The three-night minimum is only a placeholder.
- [ ] **Owner — Confirm rental obligations.** Check required registration, guest information, tax, insurance, and property disclosures with the appropriate local professionals or authorities. Supply the approved information and legal wording for the site.
- [ ] **Owner — Provide real contact and sender details.** Set the guest-facing email and phone if desired, plus the inbox that receives requests. Confirm who monitors it and who can approve a stay.
- [ ] **Developer — Finish the privacy and form content.** Publish a reviewed privacy notice covering request data and retention; link it from the form. Add clear consent/terms wording as needed and test keyboard and screen-reader use.
- [ ] **Developer — Configure delivery and spam protection.** Verify the sending domain, Resend credentials, and Cloudflare Turnstile keys. Keep secrets on the server. Submit controlled requests and verify owner delivery, validation errors, spam handling, and guest-facing success/error states.
- [ ] **Owner + developer — Define the manual booking procedure.** For each request: inspect current availability, respond with an offer, confirm terms/payment, then block the dates in the calendars. Keep one record of the decision and avoid promising dates before that check.
- [ ] **Developer — Add request tracking if email alone proves fragile.** At minimum, add a durable request ID and a way to recover missed requests before opening the form to real guests. A full portal can follow later.
- [ ] **Owner — Create the Airbnb listing when ready.** Add its exported iCal feed to the server, test a blocked date, and agree how often the owners check Airbnb before accepting a direct request. Calendar imports are delayed and do not create Airbnb reservations.
- [ ] **Developer — Run a launch rehearsal.** Test allowed/blocked/unknown dates, concurrent enquiries, delivery failure, and owner confirmation with test data. Keep the public form closed until the full flow works.

**Done when:** a real guest can submit a request, the owners reliably receive and handle it, and no page suggests that a request is a confirmed reservation.

## P1 · Hosting, search, and quality

- [x] **Developer — Connect GitHub and Cloudflare Pages.** The `main` branch of `ReneDrie/Casa-Barradonna` deploys to `casa-barradonna.pages.dev`.
- [ ] **Owner + developer — Review repository access and backups.** Confirm who can push and who can manage the Cloudflare project.
- [ ] **Owner + developer — Select the production domain and launch setup.** Configure DNS, HTTPS, production and staging environments, build variables, and server secrets. Verify redirects and both language URL structures.
- [ ] **Developer — Perform the public launch check.** Set the real site URL, confirm published content and photos, then enable indexing. Inspect `robots.txt`, sitemap, canonicals, language alternates, and social previews; submit the sitemap to search tools.
- [ ] **Developer — Check accessibility and performance on real devices.** Review contrast, focus order, form errors, image loading, layout shifts, and Core Web Vitals after final media is added.
- [ ] **Developer — Add basic operational monitoring.** Alert the site manager about failed builds and booking endpoint errors; document how to disable requests quickly if email or availability fails.

**Done when:** the production domain is reliable, indexable only when approved, and requests can be shut off without a code release.

## P2 · After launch improvements

- [ ] **Content:** add a useful area guide, beach/pool practicalities, arrival information, seasonal tips, and a guest FAQ. Keep English and Dutch pages paired and fact-checked.
- [ ] **Gallery:** add room-specific galleries and floor plan if available. Use genuine guest reviews only after stays occur and permission is obtained.
- [ ] **Measurement:** choose a privacy-conscious analytics setup and track page visits, booking form starts, successful requests, and source channels. Use the data to improve copy and the request flow.
- [ ] **Booking communication:** add an acknowledgement to the guest and owner templates for offer, confirmation, decline, and pre-arrival details. Keep the owner in control of confirmation.
- [ ] **Seasonal operations:** define how rates, closed dates, minimum stays, and cleaning buffers are maintained; document who updates them.

## P3 · Separate booking portal, when volume warrants it

- [ ] **Scope and security:** agree the portal roles and data retention policy. Use individual managed logins for the owners and site manager, with account recovery and an audit trail. Do not store guest records in Sanity.
- [ ] **Reservation database:** add requests, guests, date ranges, statuses (`new`, `on hold`, `confirmed`, `declined`, `cancelled`), manual blocks, and notes. Prevent overlapping confirmed stays and make conflicts visible before confirmation.
- [ ] **Owner workflow:** provide a calendar and request queue, with safe status changes and a record of who made each decision. Only send confirmation after the dates and terms are approved.
- [ ] **Calendar exchange:** export confirmed direct bookings as an iCal feed that Airbnb can import, and continue importing Airbnb's feed. Monitor sync age and show when availability is uncertain.
- [ ] **Channel decision:** if instant booking or reliable cross-channel inventory becomes a requirement, assess an Airbnb-supported channel manager and its costs before building deeper automation. An iCal feed alone cannot create an Airbnb reservation or guarantee a real-time lock.
- [ ] **Later options:** add payments, deposits, automated messages, cleaner access, and reporting only after the reservation workflow and rental terms are stable.

**Decision gate:** build this portal when manual inbox handling causes missed requests, duplicate work, or availability risk. Until then, keep the launch process simple and observable.
