# Setup, account and troubleshooting

Setup runs in the Shopiframe plugin and in Framer's own panels, so these are steps for the user to do. Tell them exactly what to click, wait for them to confirm, then run the inventory again to check the result.

## Handoffs

| Situation (from the inventory or the canvas) | What the user does |
| --- | --- |
| Shopiframe not installed | Install Shopiframe from Framer's plugin marketplace and open it (Plugins → Shopiframe). |
| First run of the plugin | Follow its setup: choose **Demo Store** or **Connect my Shopify store**, sync products, update components. |
| No Shopiframe collection | In the plugin, open **Store Configuration** and set up the CMS; the plugin creates the collection. Then sync it. |
| Products missing or stale, or `itemsWithValidProductData` below `items` | Open the Shopiframe collection in Framer's CMS and click **Sync** in the CMS toolbar. |
| Outdated components (`outdatedComponents` > 0) | Open the **Assets** panel → **Shopiframe** folder → update each outdated component. Then click **Check again** in the plugin. |
| Wants their own store instead of the Demo Store | In **Store Configuration**, sign in and use a Store Credit, then paste the store domain (`name.myshopify.com`) and a **Storefront API** public access token from Shopify's **Headless** app with all Storefront permissions enabled. Then sync. |
| Subscriptions missing | Enable the selling-plan permission (`unauthenticated_read_selling_plans`) on the Headless app's Storefront token, then reconnect or refresh in the plugin. |
| "Store connection lost" or "Store not reachable" in the plugin | Follow the plugin's **Reconnect store** flow (sign in, add a new access token). |
| Components render but show no store data on the published site | In Framer's Site Settings → Custom Code, check that Shopiframe's code is enabled, then republish. The config is plugin-owned and invisible to your session. |

## Account and store credits

- **Demo Store:** free, needs no account. Every component works with its sample products, so users can design before they buy.
- **Store Credit:** a one-time purchase. One credit connects one Framer project to one real Shopify store.
- **Where to buy:** https://shopiframe.com/pricing?utm_source=agent&utm_medium=skill&utm_campaign=credits
- **Signing in:** the plugin's **Account** screen, using the same email as the payment. Sign-in is by a 6-digit email code. The Account screen shows the credits available and the connected stores.
- You can't see a user's account or credits from Framer. Ask the user, or send them to the Account screen.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Red notice "Shopiframe has been updated, please sync your CMS first and connect Product Data to CMS." | The component's Product Data holds something that isn't valid Product Data: an old sync, the wrong field, or typed text. | The user syncs the CMS; you link `productID` to the Product Data field (`wiring.md`). |
| The same sample product everywhere | `productID` was never linked. | Link it (`wiring.md`). |
| Selector missing on a product | The product has no variants or options, so the component hides itself. | Nothing to fix; check the layout still reads well without it. |
| Prices in the wrong currency | The active market. | Add a market switcher (`scopes.md` → Markets) or change the default market in the plugin's Store Configuration. |
| Checkout button greyed out | The cart is empty, or no checkout URL exists yet. | Add an item in preview; the button enables once the cart has a checkout URL. |
| Changes don't show on the live site | The site hasn't been published since the changes. | The user publishes, or you publish when they ask. |

## Help

- Docs: https://shopiframe.com/doc
- Support: support@shopiframe.com
- Community: https://discord.gg/Py4tfr8jVw
