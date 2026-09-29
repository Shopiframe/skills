---
name: shopiframe
description: >
  Shopiframe: Shopify commerce on Framer sites. Use when building or changing a Framer store's product pages, product grids, cart, checkout or currency/market switching; when placing or customising Shopiframe components; or when Shopiframe components show errors, demo data or outdated warnings. Works on top of the `framer` skill.
---

# Shopiframe

Shopiframe puts a Shopify store on a Framer site, in two parts:
- **The Shopiframe plugin**, which runs inside Framer, owns setup: it connects the store, syncs products into the "Shopiframe" CMS collection, installs the store config, and updates components.
- **Shopiframe components** render live products, cart and markets on the site.

You build with the components and hand setup steps to the user in the plugin.

## Start

1. Load the `framer` skill and connect a session to the project. Its workflow (the task map, `exec`, `applyChanges`, and reading back changes) applies to everything here.
2. Run the inventory and keep the report:
   ```bash
   npx @framer/agent@latest exec -s <session> < <this skill's directory>/scripts/inventory.js
   ```
   It lists:
   - the Shopiframe collection, with the ID of its Product Data field and how many items have valid Product Data
   - CMS detail pages
   - every Shopiframe component instance, and which are outdated
3. **Setup gate.** If the report shows no Shopiframe collection, items without valid Product Data, or outdated components, the user fixes that in the plugin first. The exact handoff is in `references/setup-and-account.md`. Cart and market components work without the collection; product components need it.

## Rules

- **The user owns setup.** Store connection, CMS sync, custom code and component updates happen in the plugin and in Framer's panels, so these are steps for the user. The Shopiframe collection is plugin-managed: read it and bind to it, and ask the user to sync when its data is wrong.
- **Insert by module URL.** Take the URL from `references/components.md`:
  - code components: `framer.addComponentInstance({ url, parentId })`
  - design components: `framer.addDetachedComponentLayers({ url })`

  Once a component is in the project, `applyChanges` can reuse it by its component ID.
- **Link Product Data on every product component.** An unlinked product component shows a demo product, even on the published site.
- **Customise through controls, slots and design layers.** Shopiframe code components stay external: never convert them to local components or edit their code, and leave the hidden `version` and `font` controls untouched. That keeps plugin updates and readiness checks working.
- **Design each area yourself.** `references/scopes.md` says which components an area needs and how they must be wired; the layout and styling are up to you and the user's brand.

## Task map

| Task | Read |
| --- | --- |
| Choosing components, reading their controls, defaults and URLs | `references/components.md` |
| Building a product page, product grid, cart and header, or market switcher | `references/scopes.md`, then `references/wiring.md` |
| Linking Product Data, opening the cart, filling slots, custom buttons, restyling | `references/wiring.md` |
| Missing collection or products, the red "sync your CMS" notice, demo data showing, outdated components, credits, pricing, account | `references/setup-and-account.md` |

## Done

The task is done when all of these hold:
- Every instance you changed has been read back, and its controls hold the values you set.
- Every product component has Product Data linked.
- Any canvas-only preview controls you used have been reset.
- Running the inventory again shows no outdated components.
- A screenshot of each changed area matches the request.

Then tell the user:
- which steps they still need to take in the plugin
- that they should preview or publish to check live cart and checkout behaviour
