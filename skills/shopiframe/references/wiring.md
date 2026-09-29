# Wiring and customising Shopiframe components

This file covers Shopiframe-specific wiring. Framer's own syntax is in the `framer` skill: variable binding, overlays, event actions and component slots. Read controls with `framer.agent.readComponentControls` before setting any `$control__*` value.

## Product Data

Every product component has a `productID` control titled **Product Data**. It takes the JSON the plugin syncs into the Shopiframe collection's **Product Data** field.

- **On a CMS detail page:** bind each product component's `productID` to the page's Product Data variable: `$control__productID="var(--variable-<id>)"`.
  - The variable belongs to the Shopiframe `CollectionNode`.
  - The inventory reports the field ID as `productDataFieldId`. Confirm the variable ID by reading the collection's variables.
- **In a Collection List:** bind the same way inside the repeated item, so each card gets its own product.
- **Design components:** after inserting Product Card or Cart Overlay, bind `productID` on each Shopiframe product instance inside it. Cart components need nothing.
- **Check it's linked:** read the instance back. A linked control holds a variable reference. There are two failure modes:
  - **Never set:** the component shows the built-in demo product, on the canvas and on the live site.
  - **Set to anything that isn't valid Product Data** (an empty string, typed text, another field, or data from an old sync): the component shows the red "Shopiframe has been updated, please sync your CMS first…" notice.

On a static render the components use the CMS copy of the product, then refresh price, stock and variants from Shopify in the browser. So a stale CMS shows stale data until the page loads; the fix is a plugin sync.

## Opening the cart

Product Add To Cart exposes an `openCartEvent` event.
- **Timing:** it fires straight after a successful add, or 500 ms after it when the Added To Cart animation is on.
- **Wiring:** read the instance's controls to get the event's `eventKey`. Then attach a `SHOW_OVERLAY` action on that key to the same cart overlay the header icon opens (overlay actions are covered in the `framer` skill).
- **Cart on its own page:** if the cart is a `/cart` page instead of an overlay, use a link action to that page.

## Slots

These controls take a component instance. Make the slot content a project component first.

| Component | Slot | Shown when |
| --- | --- | --- |
| Cart List | `emptyCompoenent` (spelled this way in the code) | the cart is empty |
| Cart Not Empty | `childComponent` | the cart has at least one item |
| Market Content | `component` | the chosen `country` is active (`showWhen: "active"`) or inactive |

## Custom buttons

Product Add To Cart, Cart Checkout Button, Market Button and Yampi Checkout Button draw a built-in button by default. To use the site's own button component:
1. Set `buttonType` to `"Custom"`.
2. Put the button component in the `buttonComponent` slot.
3. Set `buttonVariants.default`, `.loading` and `.disabled` to the **exact variant names** of that button component. The component switches the slot's variant as the button's state changes.

## Styling

- Style controls are objects (`priceStyle`, `variantItem`, `cartItem`, …). Read their current shape with `readComponentControls` and set values that match the site's text styles and colours.
- Currency: `reverseCurrency` on Product Price, Cart Subtotal and Promotion Progress Bar changes where the currency sits (for example `100 €` or `€100`). Market components choose their text with `formatPreset`, `buttonFormatPreset` and `itemFormatPreset`.
- Design components (Product Card, Cart Overlay) arrive as ordinary layers. Restyle and rearrange them like any other layers; the Shopiframe instances inside keep their controls.
- Shopiframe code components stay external, so the plugin can update them and check their version. Customise them only through controls and slots.

## Canvas-only previews

These controls change only what the canvas shows, so designers can style every state:
- Product Badge `preview`
- Product Stock Count `preview`
- Product Add To Cart `loadingAnimation.preview` and `addedToCartAnimation.preview`

Set `preview` back to `"current"` and the animation previews off when you finish, so the canvas shows real state again.
