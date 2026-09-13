# Madhan Crackers — Combined Final Edition

Extract the full ZIP, then open index.html in a browser. Keep all files and folders together. For shared saved selections across pages, serve the folder through a local server or deploy it to a static website host. No build or dependency installation is required.

## Included

10 coordinated pages: Home, Collection, Product, Enquiry, Contact with FAQs, Privacy, Terms, Safety, Payment information and 404.

The combined design uses a black and gold hero, warm ivory catalogue, subtle red/brown accents, dark mode, responsive navigation and a mobile bottom bar. It includes the original 82 products, 45 optimized product photos and the supplied catalogue PDF. The remaining products show honest photo placeholders.

Search, categories, price, availability and saved favourites work together. Quantities are bounded to whole numbers, malformed saved data is handled, pending rates are excluded from totals, and enquiry badges stay synchronized. Saved carts from either earlier edition can be read when on the same browser origin.

The enquiry accepts Tamil and other Unicode text. Choose “Print / save enquiry as PDF” and select Save as PDF in the browser print dialog. The WhatsApp action prepares a message for the customer to review and send.

This edition follows the commercial version's enquiry-only flow. There is no online payment or checkout. The payment URL directs customers to enquiry support, and bank/UPI credentials are not included in the public configuration.

## Editing and publishing

- Product data, contact information and photo mappings: data.js.
- Visual design: styles.css.
- Page content: the relevant HTML file.
- Customer interactions: app.js.
- Upload this entire folder to your static host. vercel.json retains the supplied redirects and basic response headers.
- Confirm business contacts, rates, product photos and the published privacy/terms text with the owner before launch. Domain-specific canonical URLs and sitemap are deliberately not guessed.

## Checks completed

- All 10 pages fit a 390px phone viewport.
- Desktop homepage visually inspected; mobile catalogue and home inspected.
- Category deep links, favourites plus search, reset, integer quantities, enquiry totals and cross-page persistence tested.
- Tamil printable enquiry preparation tested, with delivery address optional.
- All local HTML references and 45 product image mappings checked; no duplicate IDs found.
- No browser errors reported during interaction checks.

No live messages, payment transactions or public deployment were performed. A completed PDF save was not performed; browser print content was verified. Original source folders and ZIPs remain unchanged.
