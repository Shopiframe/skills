# Areas of a Shopiframe store

Four areas make up a store. Each one lists what belongs there, what must be wired, and rules that break the site when ignored. Layout, spacing and styling are yours: follow the project's design system and the `framer` skill's design rules. Component names below are display names; look up URLs and controls in `components.md`, and wiring steps in `wiring.md`.

## Product page

A CMS detail page of the Shopiframe collection, for example path `/products/:Shopiframe`. The `framer` skill covers creating CMS detail pages.

Belongs here:
- **Media:** Product Image Gallery. It switches to the selected variant's image on its own.
- **Price and status:** Product Price and Product Badge ("Sale / Sold out"), usually next to the title.
- **Selection:** pick exactly one style per product:
  - Product Variant Selector: one row per option group (Size, Color, …), with optional colour swatches.
  - Product Option Selector: a flat list of whole variants ("S / Blue") as buttons or a dropdown, with prices.
  - Custom Variant Selector: one instance per option group, filtered by group title (`filter.groupTitle` contains "Color"), rendered as buttons, images or colour swatches.
- **Buying:** Product Quantity Selector, Product Add To Cart, Shop Pay Button (buy now, skips the cart).
- **Details:** Product Stock Count ("Only 3 left"), Variant Values (SKU or barcode).
- **Only when the store sells them:**
  - Product Subscription (selling plans; needs the `selling_plans` Storefront permission)
  - Product Gift Form (gift-card recipient fields; shows for gift-card products by default)
- **Plain CMS content:** Title, Description, Content (rich text), Featured Image, Vendor, Product Type, Tags. Bind ordinary Framer text and images to these fields.

Wiring:
- Link Product Data on every product component to the page's Product Data field.
- Link Product Add To Cart's `openCartEvent` to the cart overlay, so shoppers see the item land.

Rules:
- All product components on the page share one selection per product, so they need no wiring between them.
- A selection component hides itself when the product has no variants or options, so layouts must still look right without it.

## Product grid

A CMS Collection List over the Shopiframe collection. It can be a shop page, a category page, or a "featured products" section on the home page.

Belongs here:
- **Product Card** (design component): a ready card with image, title and Product Price.
- Or your own card: Featured Image, Title, Product Price, Product Badge, optionally Product Add To Cart for quick add.
- Link each card to the product page, using the item's slug through the detail-page link.

Wiring:
- Product components inside the repeated item link Product Data to the item's Product Data field.

Rules:
- Filter with the Collection, Tags or Product Type fields. These are comma-joined strings, so use "contains".
- Quick-add without a selector in the card adds the product's first variant, even when that variant is sold out. For products with several variants, link to the product page instead.
- Use pagination (infinite scroll or load more) for large catalogues.

## Cart and header

The cart is global: it has no Product Data and works on every page.

Belongs here:
- **Header:** a cart icon with Cart Counter (optionally `hiddenOnZero`) that opens the cart. Put the header in a shared component or layout so it's on every page.
- **Cart Overlay** (design component): a ready cart built from the cart components. Use it as a fixed overlay (side drawer or modal), or place it on a `/cart` page.
- Or build your own cart:
  - Cart List (line items; its `emptyCompoenent` slot is the empty state)
  - Cart Subtotal
  - Promotion Progress Bar (free-shipping or discount threshold)
  - Cart Note
  - Cart Checkout Button
  - Cart Not Empty around anything that should disappear when the cart is empty
- Yampi Checkout Button replaces Cart Checkout Button only for stores that use Yampi checkout.

Wiring:
- Open the overlay from the header icon and from Product Add To Cart's `openCartEvent`. Use the same overlay for both.

Rules:
- Cart Checkout Button disables itself while the cart is empty or no checkout URL exists. Cart Not Empty is for hiding it, not for making it work.

## Markets

Country and currency switching. It needs Shopify Markets set up in the store; the list comes from the store.

Belongs here:
- **Switching:** Market Dropdown (choose from all markets) or Market Button (switch to one chosen country; it hides itself when that country is already active). Usually in the header or footer.
- **Showing the current market:** Active Market (country and currency text), Country Flags (the active or a chosen country's flag).
- **Region-specific content:** Market Content shows its slot only when a chosen country is active (or inactive). Use it for shipping notes, region banners, or local promotions.

Rules:
- Prices in every product and cart component switch currency on their own; there's nothing to wire.
