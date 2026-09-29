# Shopiframe skill for AI agents

Teach your AI agent to build Shopify stores in Framer with [Shopiframe](https://shopiframe.com/?utm_source=github&utm_medium=skill&utm_campaign=readme): product pages, product grids, cart, checkout and market switching, built from Shopiframe's components and customised to your design.

## What you need

- A Framer project with the **Shopiframe plugin** installed and set up, using either the free Demo Store or your own Shopify store. The plugin connects the store and syncs your products; the agent builds with them.
- For external agents (Claude Code, Codex, Cursor, Windsurf, …): Node.js 22+ and Framer's agent tools.

## Install for external agents

1. Install Framer's agent tools and skills:
   ```bash
   npx @framer/agent@latest setup
   ```
2. Install the Shopiframe skill:
   ```bash
   npx skills add shopiframe/skills
   ```
3. Ask your agent, for example: *"Using Shopiframe, build a product page for my Framer store with a gallery, variant picker and add to cart that opens the cart drawer."* The agent connects to your project through Framer (you approve access in the browser). It checks your Shopiframe setup, then builds.

## Add to Framer's built-in AI

Framer's AI can use skills stored in your project.
1. Open [`in-app/shopiframe.skill.md`](skills/shopiframe/in-app/shopiframe.skill.md) and copy its contents.
2. In Framer's AI chat, type `/skills` and ask it to save the pasted text as a skill named **shopiframe** that is used on demand.
3. Ask for store work as usual; the AI picks up the skill when your request is about your store.

Skills stay with a project when it's remixed, so a template that has the skill passes it on.

## What's inside

The skill lives in [`skills/shopiframe/`](skills/shopiframe/).

| File | Purpose |
| --- | --- |
| `SKILL.md` | Entry point: setup check, rules, task map |
| `references/components.md` | Every Shopiframe component: what it does, its controls and defaults, and its module URL (generated from the component source) |
| `references/scopes.md` | Which components belong on the product page, product grid, cart and header, and market switcher |
| `references/wiring.md` | Linking Product Data, opening the cart, slots, custom buttons, styling |
| `references/setup-and-account.md` | Plugin steps, store credits, troubleshooting |
| `scripts/inventory.js` | Read-only check of your project's Shopiframe setup |
| `in-app/shopiframe.skill.md` | Single-file version for Framer's built-in AI |

## Store credits

The Demo Store is free. Connecting your own Shopify store uses one Store Credit per project; see [pricing](https://shopiframe.com/pricing?utm_source=github&utm_medium=skill&utm_campaign=readme). Sign in and manage credits in the plugin's **Account** screen.

## Help

[Docs](https://shopiframe.com/doc) · [Discord](https://discord.gg/Py4tfr8jVw) · support@shopiframe.com
