Shopiframe connects a Shopify store to this Framer site. The Shopiframe plugin connects the store, syncs products into the "Shopiframe" CMS collection and installs the store config. Shopiframe components (version 2.8.0) render live products, cart and markets on the site. You build and customise with the components; setup stays in the plugin.

Setup belongs to the plugin. When the site needs one of these, tell the user to open Shopiframe (Plugins → Shopiframe):
- No "Shopiframe" CMS collection: Store Configuration in the plugin creates it. Missing or stale products: open the Shopiframe collection in the CMS and click Sync.
- A component shows "Shopiframe has been updated, please sync your CMS first…": sync the CMS, then link Product Data.
- The plugin reports outdated components: Assets panel → Shopiframe folder → update them, then Check again in the plugin.
- Store credits, account and pricing: the plugin's Account screen, or https://shopiframe.com/pricing. The Demo Store is free; each real store needs one store credit.
The "Shopiframe" collection is managed by the plugin: read it, bind to it, and leave its items and fields to the plugin.

Rules:
- Product components need their "Product Data" control linked to the Product Data field of the Shopiframe collection: on a CMS detail page of that collection, or inside a Collection List item over it. Never linked, a component shows a demo product, even on the live site; linked to anything else, it shows the red "sync your CMS" notice.
- All product components linked to the same product share one selection, so a variant selector updates price, badge, stock, gallery and Add to Cart together.
- Customise components through their controls. Many buttons have Type = Custom with a Button Component slot and variant names (default, loading, disabled) that must match your button's variants. The two design components (Product Card, Cart Overlay) are regular layers: restyle them freely.
- Keep Shopiframe components as they are: code stays in the plugin's components, and the hidden version and font controls stay untouched, so plugin updates keep working.
- Badge and Stock Count "Preview" controls and the Add to Cart animation previews only affect the canvas; set them back to "current" or off when you're done.
- Title, Description, Content, Featured Image, Vendor, Product Type and Tags are ordinary CMS fields: bind text and images to them as usual.

Where components go:
- Product page (CMS detail page of the Shopiframe collection): Image Gallery; Price and Sale / Sold out badge; one selection style (Variant Selector for option groups such as Size and Color, Option Selector for a flat list of variants, or one Custom Variant Selector per option group for swatches and images); Quantity Selector; Add to Cart; Shop Pay Button; Stock Count; Subscription and Gift Form when the store sells those; Variant Values for SKU or barcode.
- Product grid (Collection List over the Shopiframe collection): Product Card, or your own card with Featured Image, Title, Price and Badge, linked to the product page. Filter by the Collection, Tags or Product Type fields.
- Cart and header: a cart icon with Cart Counter in the header, opening the Cart Overlay (Cart List, Cart Subtotal, Promotion Progress Bar, Cart Note, Cart Checkout Button, Cart Not Empty). Add to Cart's openCartEvent opens the same overlay after a product is added. Put the header in a shared component so the cart is on every page.
- Markets: Market Dropdown or Market Button with Country Flags and Active Market in the header or footer; Market Content shows its slot only in (or outside) a chosen country. They need Shopify Markets set up in the store.

Components:
- Cart Overlay (design component, Cart): Cart component is built from several Shopiframe components, and you can easily modify its design and layout.
- Product Card (design component, Product): The Card component is a Framer component used to display product cards, featuring our plugin’s price component.
- Active Market (Markets): Displays the currently active country and currency to let users know which market they are currently in.
- Cart Checkout Button (Cart): Redirects the user to the Shopify checkout URL for the current cart.
- Cart Counter (Cart): Displays the number of items in the cart and updates automatically whenever the cart changes.
- Cart List (Cart): Display a list of products added to the shopping cart with their image, title, variant label, price, quantity controls, and remove action.
- Cart Note (Cart, not in the plugin catalog): Text input for an order note, saved to the Shopify cart note.
- Cart Not Empty (Cart, not in the plugin catalog): Renders its Component slot only while the cart has items; use it to hide checkout areas when the cart is empty.
- Promotion Progress Bar (Cart): Motivate shoppers with a live progress bar in the cart that updates as they add items.
- Cart Subtotal (Cart): Displays the cart subtotal before shipping and taxes.
- Country Flags (Markets): Displays a country flag based on the active market or a specific country of your choice.
- Custom Variant Selector (Product, link Product Data): Build a fully custom variant selector with your own designs—images, color swatches, or any layout you want for each option.
- Market Button (Markets): Switches the store market to the selected country and currency on click.
- Market Content (Markets): Show or hide content based on the active country, giving you more control over country-specific experiences.
- Market Dropdown (Markets): This component allows customers to select their preferred country and currency from a simple dropdown.
- Product Add To Cart (Product, link Product Data): Adds the selected variant, quantity, selling plan, and any product inputs to the live shopping cart.
- Product Badge (Product, link Product Data): Badge component displays the product status.
- Product Gift Form (Product, link Product Data, not in the plugin catalog): Recipient email, recipient name and message fields sent with the cart line.
- Product Image Gallery (Product, link Product Data): Display product images dynamically from Shopify.
- Product Option Selector (Product, link Product Data): Renders product options as buttons or a dropdown and manages their selection states.
- Product Price (Product, link Product Data): This component displays the price of products.
- Product Quantity Selector (Product, link Product Data): Input that lets users select a product quantity while enforcing inventory limits.
- Product Stock Count (Product, link Product Data): Display the stock count of the product, with the option to set a condition to hide it when the stock exceeds a specified threshold.
- Product Subscription (Product, link Product Data): Displays one-time purchase and Shopify selling plan options, then passes the selected plan to Add to Cart.
- Product Variant Selector (Product, link Product Data): Displays available product variants and manages their selection states.
- Shop Pay Button (Product, link Product Data): A one-click Buy Now button that sends customers directly to Shopify Checkout without adding to the cart.
- Variant Values (Product, link Product Data, not in the plugin catalog): Shows the selected variant's SKU or barcode.
- Yampi Checkout Button (Cart, not in the plugin catalog): Checkout button that sends the cart to Yampi's checkout instead of Shopify's.

Components marked "not in the plugin catalog" can't be inserted from the plugin yet. Support: https://shopiframe.com/doc · support@shopiframe.com
