<!-- Generated from the Shopiframe component source. Do not edit by hand. -->

# Shopiframe components

Component version **2.8.0**. A placed instance whose hidden `version` control is lower is outdated; the user updates it from Framer's Assets panel (Shopiframe folder).

- Code components are inserted with `framer.addComponentInstance({ url, parentId })` and customised through their controls (`$control__<key>` in `applyChanges`).
- Design components are inserted with `framer.addDetachedComponentLayers({ url })`: they arrive as editable layers built from the code components.
- Read a placed instance's live controls with `framer.agent.readComponentControls` before setting them; this table lists the keys and defaults.

## Index

| Component | Area | Product Data | Insertable by URL |
| --- | --- | --- | --- |
| Active Market | Markets | no | yes |
| Cart Checkout Button | Cart | no | yes |
| Cart Counter | Cart | no | yes |
| Cart List | Cart | no | yes |
| Cart Note | Cart | no | no |
| Cart Not Empty | Cart | no | no |
| Promotion Progress Bar | Cart | no | yes |
| Cart Subtotal | Cart | no | yes |
| Country Flags | Markets | no | yes |
| Custom Variant Selector | Product | yes | yes |
| Market Button | Markets | no | yes |
| Market Content | Markets | no | yes |
| Market Dropdown | Markets | no | yes |
| Product Add To Cart | Product | yes | yes |
| Product Badge | Product | yes | yes |
| Product Gift Form | Product | yes | no |
| Product Image Gallery | Product | yes | yes |
| Product Option Selector | Product | yes | yes |
| Product Price | Product | yes | yes |
| Product Quantity Selector | Product | yes | yes |
| Product Stock Count | Product | yes | yes |
| Product Subscription | Product | yes | yes |
| Product Variant Selector | Product | yes | yes |
| Shop Pay Button | Product | yes | yes |
| Variant Values | Product | yes | no |
| Yampi Checkout Button | Cart | no | no |
| Cart Overlay (design) | Cart | inside | yes |
| Product Card (design) | Product | inside | yes |

## Design components

### Cart Overlay

Cart · insert: `https://framer.com/m/Cart-Overlay-5Qcb.js`

Cart component is built from several Shopiframe components, and you can easily modify its design and layout. You can use the Cart as an overlay or a page in your project.

### Product Card

Product · insert: `https://framer.com/m/Product-Card-jaN9.js`

The Card component is a Framer component used to display product cards, featuring our plugin’s price component. You can easily customize its design and layout.

## Product components

### Custom Variant Selector

`Shopify_CustomVariantSelector` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-CustomVariantSelector-vpibpa.js`

Build a fully custom variant selector with your own designs—images, color swatches, or any layout you want for each option. Use it when the standard Variant Selector does not match the desired storefront design.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `filter` | Filter | object: type, groupTitle |  |
| `type` | Type | enum: `button`, `image`, `color` | `"button"` |
| `image` | Image (conditional) | object: imageFit, focalPoint |  |
| `color` | Color Mapping (conditional) | object: colorMapping |  |
| `style` | Styles | object: width, height, gap, wrapLayout, borderRadius, backgroundColor, border |  |
| `selectedState` | Selected | object: color, backgroundColor, border, boxShadow |  |
| `separator` | Separator | object: show, color, width, height, margin |  |
| `unavailableState` | Unavailable | object: behavior, unavailableOpacity |  |
| `labels` | Labels | object: valueText, groupLabel |  |
| `interaction` | ⚡ Interaction | object: tapScale |  |

### Product Add To Cart

`Shopify_ProductAddToCart` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductAddToCart-N0P9.js`

Adds the selected variant, quantity, selling plan, and any product inputs to the live shopping cart. You can customize its text and style as you like.

The plugin catalog calls it "Add to Cart".

Slots: `buttonComponent` (Button Component).

Events: `openCartEvent`.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `buttonType` | Type | enum: `Default`, `Custom` | `"Default"` |
| `buttonComponent` | Button Component (conditional) | componentinstance |  |
| `buttonVariants` | Component Variants (conditional) | object: default, loading, disabled |  |
| `label` | Label (conditional) | string | `"Add to cart"` |
| `style` | 🎨 Style (conditional) | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `hoverStyle` | 🎨 Hover (conditional) | object: color, backgroundColor, border |  |
| `leftIconMode` | Left Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `leftIcon` | Left Settings (conditional) | object: preset, image, size, gap, color |  |
| `rightIconMode` | Right Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `rightIcon` | Right Settings (conditional) | object: preset, image, size, gap, color |  |
| `loadingAnimation` | Loading Animation | object: enabled, preview, label, style |  |
| `addedToCartAnimation` | Added To Cart Animation | object: enabled, preview, label, entrance, duration, style |  |
| `errorStyle` | Error Style | object: fontSize, color, font, padding, letterSpacing, textTransform |  |

### Product Badge

`Shopify_ProductBadge` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductBadge-V0Ox.js`

Badge component displays the product status. If there are multiple prices, it displays ‘On Sale,’ and if out of stock, it shows ‘Sold Out’ . Selecting a variant on the product page will update the badge accordingly.

The plugin catalog calls it "Sale / Sold out".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `preview` | Preview | enum: `current`, `onSale`, `soldOut` | `"current"` |
| `label` | Sale Label | string | `"On Sale"` |
| `soldOutLabel` | Sold out Label | string | `"Sold out"` |
| `styles` | On Sale | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow |  |
| `soldOutStyles` | Sold Out | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow, opacity |  |
| `iconMode` | Icon | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `iconPreset` | Icon Preset (conditional) | enum, 9 options (ISO country codes) |  |
| `iconImage` | Icon Image (conditional) | responsiveimage |  |
| `iconSettings` | Icon Settings (conditional) | object: position, size, gap, color |  |

### Product Gift Form

`Shopify_ProductGiftForm` · Product · needs Product Data · not in the plugin catalog: no module URL, cannot be inserted by URL

Recipient email, recipient name and message fields sent with the cart line. By default it only shows for gift-card products.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `visibility` | Visibility | enum: `based_on_product`, `always` | `"based_on_product"` |
| `label` | Label | object: label, style |  |
| `fields` | Fields | object: Recipient email, Recipient name, Message |  |
| `gap` | Gap | number | `10` |
| `form` | Form | object: gap, transition |  |
| `field` | Field | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `checkbox` | Checkbox | object: size, backgroundColor, border, borderRadius, checkedStyle |  |

### Product Image Gallery

`Shopify_ProductImageGallery` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductImageGallery-5mKF.js`

Display product images dynamically from Shopify. This component is highly customizable; you can also adjust the position of thumbnails. It automatically changes to the variant image if the product has variants with images.

The plugin catalog calls it "Image Gallery".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `flexDirection` | ↔️ Direction | enum: `row`, `column`, `row-reverse`, `column-reverse` | `"column"` |
| `gap` | Gap | number | `12` |
| `imageStyle` | Main Image | object: backgroundColor, border, borderRadius, aspectRatio, objectFit, objectPosition |  |
| `hideThumbs` | Thumbs | segmentedenum: `hide`, `visible` | `"visible"` |
| `thumbsStyle` | Thumbnails (conditional) | object: size, gap, radius, backgroundColor, border, activeBorderColor, activeBorderWidth, objectFit, objectPosition, aspectRatio |  |
| `enableZoom` | Enable Zoom | boolean | `false` |
| `zoomLevel` | Zoom Level (conditional) | number | `1.5` |
| `videoAutoPlay` | Autoplay | boolean | `false` |
| `videoControls` | Controls | boolean | `true` |

### Product Option Selector

`Shopify_ProductOptionSelector` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductOptionSelector-PsRq.js`

Renders product options as buttons or a dropdown and manages their selection states. It will automatically hide if there are no options.

The plugin catalog calls it "Option Selector".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `type` | Type | enum: `button`, `dropdown` | `"button"` |
| `showPrice` | Price | boolean | `true` |
| `styles` | Wrapper (conditional) | object: gap, flexDirection, flexWrap, justifyContent |  |
| `optionStyle` | Option (conditional) | object: fitContent, width, height, fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow, gap, priceStyle |  |
| `selectedOptionStyle` | Selected (conditional) | object: color, priceColor, backgroundColor, border, boxShadow |  |
| `hoverOptionStyle` | Hover (conditional) | object: color, backgroundColor, border, boxShadow |  |
| `tapScale` | Tap Scale (conditional) | number | `0.98` |
| `placeholder` | Placeholder (conditional) | string | `"Select an option"` |
| `dropdownStyle` | Dropdown (conditional) | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow |  |
| `dropdownIcon` | Dropdown Icon (conditional) | object: visible, size, color, right |  |

### Product Price

`Shopify_ProductPrice` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductPrice-cLMv.js`

This component displays the price of products. When there are multiple prices for a product, the ‘Start from’ option appears, which you can also remove it. On the product page, the price automatically updates when a variant is selected.

The plugin catalog calls it "Price".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `startFromTitle` | Start from Label | string | `"Start from"` |
| `soldOutTitle` | Sold out Label | string | `"Sold out"` |
| `containerStyle` | Layout | object: flexDirection, flexWrap, alignItems, justifyContent, gap |  |
| `priceStyle` | Price | object: hidden, fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow |  |
| `comparePriceStyle` | Compare Price | object: hidden, textDecoration, fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow |  |
| `soldOutStyle` | Sold Out | object: hidden, lineThrough, fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow |  |
| `reverseCurrency` | Reverse Currency | boolean | `false` |

### Product Quantity Selector

`Shopify_ProductQuantitySelector` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductQuantitySelector-YXtp.js`

Input that lets users select a product quantity while enforcing inventory limits.

The plugin catalog calls it "Quantity Selector".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `type` | Type | enum: `grouped`, `separate` | `"grouped"` |
| `styles` | Style (conditional) | object: fontSize, gap, color, backgroundColor, font, border, borderRadius, padding, iconColor, iconSize |  |
| `separateLayoutStyles` | Layout (conditional) | object: gap |  |
| `separateButtonStyles` | Buttons (conditional) | object: backgroundColor, border, borderRadius, size, iconColor, iconSize |  |
| `separateQuantityStyles` | Quantity (conditional) | object: fontSize, font, color, backgroundColor, border, borderRadius, padding |  |
| `limitToStock` |  | boolean | `true` |

### Product Stock Count

`Shopify_ProductStockCount` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductStockCount-Wj06.js`

Display the stock count of the product, with the option to set a condition to hide it when the stock exceeds a specified threshold.

The plugin catalog calls it "Stock Count".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `preview` | Preview | enum: `current`, `inStock`, `outOfStock` | `"current"` |
| `inStock` | In Stock | object: visible, text, fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `outOfStock` | Out of Stock | object: visible, text, fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `stockExceeds` | Hide If > | number | `7` |

### Product Subscription

`Shopify_ProductSubscription` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductSubscription-DRRx.js` · needs Storefront permission: selling_plans

Displays one-time purchase and Shopify selling plan options, then passes the selected plan to Add to Cart. Compatible with Shopify selling plan apps such as Seal Subscriptions.

The plugin catalog calls it "Subscription".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `style` | 🎨 Wrapper | object: backgroundColor, border, borderRadius, boxShadow, innerPadding, innerGap, itemGap, overflow |  |
| `oneTimePurchase` | 🎨 One-time Purchase | object: title, hidden, innerPadding, outerPadding |  |
| `dividerStyle` | 🎨 Divider | object: hidden, backgroundColor, thickness, margin |  |
| `groupName` | 🎨 Group Name | object: hidden, marginBottom, color, font |  |
| `planItem` | 🎨 Plan Item | object: backgroundColor, border, borderRadius, padding, gap, tapScale, titleStyle, selectedStyle, hoverStyle |  |
| `checkboxStyle` | 🎨 Checkbox | object: size, backgroundColor, border, borderRadius, boxShadow, selectedStyle, checkedStyle |  |

### Product Variant Selector

`Shopify_ProductVariantSelector` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ProductVariantSelector-YE65.js`

Displays available product variants and manages their selection states. Automatically hides when the product has no variants.

The plugin catalog calls it "Variant Selector".

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `wrapper` |  | object: gap, optionGap, valuesGap, flexDirection, alignItems |  |
| `label` |  | object: display, fontSize, color, font, padding, letterSpacing |  |
| `variantItem` | Variant | object: fontSize, color, font, padding, letterSpacing, justifyContent, backgroundColor, border, borderRadius, boxShadow, gap |  |
| `selectedOption` |  | object: color, backgroundColor, border, boxShadow |  |
| `hoverOption` | Hover | object: color, backgroundColor, border, boxShadow |  |
| `separator` | Separator | object: show, color, width, height, margin |  |
| `supportColors` | Color Swatches | boolean | `false` |
| `colorVariant` |  (conditional) | object: borderRadius, size, border, fallbackColor, colorMapping |  |
| `hideUnavailable` | Unavailable | boolean | `false` |
| `unavailableOpacity` | Unavailable Opacity (conditional) | number | `0.35` |
| `tapScale` | Tap Scale | number | `0.98` |

### Shop Pay Button

`Shopify_ShopPayButton` · Product · needs Product Data · insert: `https://framer.com/m/Shopify-ShopPayButton-UqZ7.js`

A one-click Buy Now button that sends customers directly to Shopify Checkout without adding to the cart.

### Variant Values

`Shopify_VariantValues` · Product · needs Product Data · not in the plugin catalog: no module URL, cannot be inserted by URL

Shows the selected variant's SKU or barcode.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `value` |  | enum: `sku`, `barcode` | `"sku"` |
| `styles` | Styles | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |

## Cart components

### Cart Checkout Button

`Shopify_CartCheckoutButton` · Cart · no Product Data · insert: `https://framer.com/m/Shopify-CartCheckoutButton-vFJD.js`

Redirects the user to the Shopify checkout URL for the current cart. It disables automatically when a live checkout URL is unavailable or the cart is empty.

The plugin catalog calls it "Checkout Button".

Slots: `buttonComponent` (Button Component).

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `hideWhenEmpty` | Hide when empty | boolean | `false` |
| `buttonType` | Type | enum: `Default`, `Custom` | `"Default"` |
| `buttonComponent` | Button Component (conditional) | componentinstance |  |
| `buttonVariants` | Component Variants (conditional) | object: default, loading, disabled |  |
| `label` | Label (conditional) | string | `"Checkout"` |
| `style` | 🎨 Style (conditional) | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `hoverStyle` | 🎨 Hover (conditional) | object: color, backgroundColor, border |  |
| `leftIconMode` | Left Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `leftIcon` | Left Settings (conditional) | object: preset, image, size, gap, color |  |
| `rightIconMode` | Right Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `rightIcon` | Right Settings (conditional) | object: preset, image, size, gap, color |  |

### Cart Counter

`Shopify_CartCounter` · Cart · no Product Data · insert: `https://framer.com/m/Shopify-CartCounter-XiR4.js`

Displays the number of items in the cart and updates automatically whenever the cart changes.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `styles` |  | object: fontSize, color, font, padding, letterSpacing, width, height, backgroundColor, border, borderRadius |  |
| `hiddenOnZero` | Hide on 0 | boolean | `false` |
| `countAllVariants` | Count all variants | boolean | `false` |

### Cart List

`Shopify_CartList` · Cart · no Product Data · insert: `https://framer.com/m/Shopify-CartList-q1Mn.js`

Display a list of products added to the shopping cart with their image, title, variant label, price, quantity controls, and remove action. All parts of the component are customizable, including an empty state for when no items are in the cart.

Slots: `emptyCompoenent` (Empty component).

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `emptyCompoenent` | Empty component | componentinstance |  |
| `gap` | Gap | number | `10` |
| `cartItem` | Item | object: flexDirection, alignItems, backgroundColor, gap, border, borderRadius, padding |  |
| `imageStyle` | Image | object: size, border, borderRadius, objectFit, aspectRatio |  |
| `counterStyles` | Counter | object: fontSize, gap, color, backgroundColor, font, border, borderRadius, padding, iconColor, iconSize |  |
| `titleStyles` | Title | object: color, fontSize, font, padding, letterSpacing |  |
| `variantStyles` | Variant Label | object: color, fontSize, font, padding, letterSpacing |  |
| `priceStyles` | Price Styles | object: color, fontSize, font, padding, letterSpacing |  |
| `removeStyles` | Remove | object: color, size, backgroundColor, border, borderRadius, padding |  |

### Cart Note

`Shopify_CartNote` · Cart · no Product Data · not in the plugin catalog: no module URL, cannot be inserted by URL

Text input for an order note, saved to the Shopify cart note.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `inputType` | Input Type | segmentedenum: `input`, `textarea` | `"textarea"` |
| `placeholder` | Placeholder | string | `"Add a note to your order..."` |
| `inputStyle` | Input | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, width, minHeight |  |
| `errorStyle` | Error | object: fontSize, color, font, padding, letterSpacing, textTransform |  |

### Cart Not Empty

`Shopify_CartNotEmpty` · Cart · no Product Data · not in the plugin catalog: no module URL, cannot be inserted by URL

Renders its Component slot only while the cart has items; use it to hide checkout areas when the cart is empty.

Slots: `childComponent` (Component).

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `childComponent` | Component | componentinstance |  |

### Promotion Progress Bar

`Shopify_CartPromotionProgressBar` · Cart · no Product Data · insert: `https://framer.com/m/Shopify-CartPromotionProgressBar-bD8efu.js`

Motivate shoppers with a live progress bar in the cart that updates as they add items. Set a spending threshold to unlock a promotion—free shipping, a discount, or any incentive you choose.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `threshold` | Threshold | number | `100` |
| `message` | Progress Message | string | `"You are {{amount}} away from free shipping"` |
| `completedMessage` | Completed Message | string | `"You unlocked free shipping!"` |
| `showRemainingAmount` | Show Remaining | boolean | `false` |
| `remainingLabel` | Remaining Label (conditional) | string | `"{{amount}} remaining to unlock"` |
| `hideWhenEmpty` | Hide When Empty | boolean | `false` |
| `containerStyles` | Container | object: backgroundColor, border, borderRadius, padding, gap |  |
| `messageStyles` | Message | object: fontSize, color, font, padding, letterSpacing, amountColor, textAlign |  |
| `remainingStyles` | Remaining (conditional) | object: fontSize, color, font, padding, letterSpacing |  |
| `trackStyles` | Track | object: height, backgroundColor, border, borderRadius |  |
| `progressStyles` | Progress | object: progressColor, progressRadius, animate |  |
| `reverseCurrency` | Reverse Currency | boolean | `false` |

### Cart Subtotal

`Shopify_CartSubtotal` · Cart · no Product Data · insert: `https://framer.com/m/Shopify-CartSubtotal-xxd7.js`

Displays the cart subtotal before shipping and taxes. Updates automatically whenever the cart changes.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `styles` |  | object: color, fontSize, font, padding, letterSpacing |  |
| `reverseCurrency` | Reverse Currency | boolean | `false` |

### Yampi Checkout Button

`Shopify_YampiCheckoutButton` · Cart · no Product Data · not in the plugin catalog: no module URL, cannot be inserted by URL

Checkout button that sends the cart to Yampi's checkout instead of Shopify's. Only for stores that use Yampi.

Slots: `buttonComponent` (Button Component).

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `buttonType` | Type | enum: `Default`, `Custom` | `"Default"` |
| `buttonComponent` | Button Component (conditional) | componentinstance |  |
| `buttonVariants` | Component Variants (conditional) | object: default, loading, disabled |  |
| `label` | Label (conditional) | string | `"Checkout"` |
| `style` | 🎨 Style (conditional) | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `hoverStyle` | 🎨 Hover (conditional) | object: color, backgroundColor, border |  |
| `leftIconMode` | Left Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `leftIcon` | Left Settings (conditional) | object: preset, image, size, gap, color |  |
| `rightIconMode` | Right Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `rightIcon` | Right Settings (conditional) | object: preset, image, size, gap, color |  |

## Markets components

### Active Market

`Shopify_ActiveMarket` · Markets · no Product Data · insert: `https://framer.com/m/Shopify-ActiveMarket-7KojG2.js`

Displays the currently active country and currency to let users know which market they are currently in.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `formatPreset` | Format | enum: `countryCurrency`, `countryCodeCurrencyCode`, `countryName`, `currencyCode` | `"countryCurrency"` |
| `flagType` | Flag | segmentedenum: `none`, `emoji`, `image` | `"emoji"` |
| `flagStyle` | Flag Style (conditional) | object: size, gap, borderRadius |  |
| `styles` | Style | object: fontSize, color, font, padding, letterSpacing, textTransform |  |

### Country Flags

`Shopify_CountryFlags` · Markets · no Product Data · insert: `https://framer.com/m/Shopify-CountryFlags-iVQhUX.js`

Displays a country flag based on the active market or a specific country of your choice.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `countryTarget` | Show | segmentedenum: `active`, `specific` | `"active"` |
| `country` | Country (conditional) | enum, 244 options (ISO country codes) | `"US"` |
| `flagType` | Flag | segmentedenum: `none`, `emoji`, `image` | `"emoji"` |
| `flagStyle` | Flag Style (conditional) | object: size, gap, borderRadius |  |

### Market Button

`Shopify_MarketButton` · Markets · no Product Data · insert: `https://framer.com/m/Shopify-MarketButton-sggHH0.js`

Switches the store market to the selected country and currency on click. Automatically hides when the selected country is already active.

Slots: `buttonComponent` (Button Component).

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `country` | Country | enum, 244 options (ISO country codes) | `"US"` |
| `buttonType` | Type | enum: `Default`, `Custom` | `"Default"` |
| `buttonComponent` | Button Component (conditional) | componentinstance |  |
| `buttonVariants` | Component Variants (conditional) | object: default, loading, disabled |  |
| `label` | Label (conditional) | string | `"Change market"` |
| `style` | 🎨 Style (conditional) | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius |  |
| `hoverStyle` | 🎨 Hover (conditional) | object: color, backgroundColor, border |  |
| `leftIconMode` | Left Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `leftIcon` | Left Settings (conditional) | object: preset, image, size, gap, color |  |
| `rightIconMode` | Right Icon (conditional) | enum: `Empty`, `Default`, `Image` | `"Empty"` |
| `rightIcon` | Right Settings (conditional) | object: preset, image, size, gap, color |  |
| `errorStyle` | Error Style | object: fontSize, color, font, padding, letterSpacing, textTransform |  |

### Market Content

`Shopify_MarketContent` · Markets · no Product Data · insert: `https://framer.com/m/Shopify-MarketContent-DhVBdH.js`

Show or hide content based on the active country, giving you more control over country-specific experiences.

Slots: `component` (Component Instance).

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `component` | Component Instance | componentinstance |  |
| `country` | Country | enum, 244 options (ISO country codes) | `"US"` |
| `showWhen` | Show When | segmentedenum: `active`, `inactive` | `"active"` |

### Market Dropdown

`Shopify_MarketDropdown` · Markets · no Product Data · insert: `https://framer.com/m/Shopify-MarketDropdown-mn29FW.js`

This component allows customers to select their preferred country and currency from a simple dropdown. Just configure your Shopify Markets settings, and the component will handle the rest.

| Control | Title | Type | Default |
| --- | --- | --- | --- |
| `buttonFormatPreset` | Button Format | enum: `countryCurrency`, `countryCodeCurrencyCode`, `countryName`, `currencyCode` | `"countryCodeCurrencyCode"` |
| `itemFormatPreset` | Item Format | enum: `countryCurrency`, `countryCodeCurrencyCode`, `countryName`, `currencyCode` | `"countryCurrency"` |
| `flagType` | Flag | segmentedenum: `none`, `emoji`, `image` | `"emoji"` |
| `flagStyle` | Flag Style (conditional) | object: size, gap, borderRadius |  |
| `loadingLabel` | Loading Label | string | `"Updating..."` |
| `emptyLabel` | Empty Label | string | `"No markets available"` |
| `buttonStyle` | Button | object: fontSize, color, font, padding, letterSpacing, backgroundColor, border, borderRadius, boxShadow |  |
| `buttonHoverStyle` | Button Hover | object: color, backgroundColor, border, boxShadow |  |
| `menuSettings` | Menu Layout | object: placement, alignment, offset, matchButtonWidth |  |
| `menuStyle` | Menu | object: backgroundColor, border, borderRadius, boxShadow, padding, minWidth, maxHeight, overflowY, gap |  |
| `itemStyle` | Item | object: fontSize, color, font, padding, letterSpacing, textAlign, backgroundColor, border, borderRadius |  |
| `itemHoverStyle` | Item Hover | object: color, backgroundColor, border |  |
| `activeItemStyle` | Active Item | object: color, backgroundColor, border |  |
| `arrow` | Arrow | object: visible, size, color, strokeWidth |  |
| `motion` | Motion | object: enabled, transition, itemStagger, hoverScale, tapScale |  |
| `errorStyle` | Error | object: fontSize, color, font, padding, letterSpacing, textTransform |  |
