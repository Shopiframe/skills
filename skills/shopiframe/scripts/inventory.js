/* global framer, state */
// Shopiframe inventory: read-only facts about a connected Framer project.
// Run: npx @framer/agent@latest exec -s <session> < scripts/inventory.js
// Generated from components/tests/skill/inventory.template.js.

const COMPONENT_VERSION = "2.8.0"
const IDENTIFIER_PREFIXES = ["Shopify_","Shopiframe_"]

const compareVersions = (a, b) => {
	const left = String(a).split('.').map((part) => parseInt(part, 10) || 0)
	const right = String(b).split('.').map((part) => parseInt(part, 10) || 0)
	for (let i = 0; i < Math.max(left.length, right.length); i++) {
		const diff = (left[i] ?? 0) - (right[i] ?? 0)
		if (diff !== 0) return diff
	}
	return 0
}

// The components' own check (components/src/_utils.ts): invalid values show the red "sync your CMS" notice.
const parseProductPayload = function parseProductPayload(value) {
	if (!value) return null;
	try {
		const product = JSON.parse(value);
		const candidate = product;
		const isMoney = (money) => typeof money?.amount === "string" && typeof money?.currencyCode === "string";
		if (!product || typeof product !== "object" || typeof candidate.id !== "string" || !candidate.id || typeof candidate.availableForSale !== "boolean" || !Array.isArray(candidate.options) || !Array.isArray(candidate.media?.nodes) || !Array.isArray(candidate.variants?.nodes) || !isMoney(candidate.priceRange?.minVariantPrice) || !isMoney(candidate.priceRange?.maxVariantPrice) || !isMoney(candidate.compareAtPriceRange?.minVariantPrice) || candidate.variants.nodes.some((variant) => typeof variant?.id !== "string" || !Array.isArray(variant.selectedOptions) || !isMoney(variant.priceV2))) return null;
		return candidate;
	} catch {
		return null;
	}
}

const collections = []
for (const collection of await framer.getCollections()) {
	const fields = await collection.getFields()
	const productData = fields.find((field) => field.name === 'Product Data')
	if (!productData) continue
	const items = await collection.getItems()
	collections.push({
		name: collection.name,
		id: collection.id,
		managedBy: collection.managedBy,
		items: items.length,
		itemsWithValidProductData: items.filter((item) => parseProductPayload(item.fieldData[productData.id]?.value ?? null)).length,
		productDataFieldId: productData.id,
		fields: fields.map((field) => `${field.name} (${field.type}, ${field.id})`),
	})
}

const pages = (await framer.getNodesWithType('WebPageNode')).map((page) => page.path)

const components = {}
for (const node of await framer.getNodesWithType('ComponentInstanceNode')) {
	if (!IDENTIFIER_PREFIXES.some((prefix) => node.componentIdentifier?.includes(prefix))) continue
	const name = node.componentName ?? node.componentIdentifier
	const entry = (components[name] ??= { instances: 0, outdated: 0, versions: [] })
	const version = node.controls?.version
	entry.instances++
	// Framer can return empty controls after a project is cloned; those cannot be checked.
	if (Object.keys(node.controls ?? {}).length > 0 && (version === undefined || compareVersions(version, COMPONENT_VERSION) < 0)) {
		entry.outdated++
	}
	if (version !== undefined && !entry.versions.includes(String(version))) entry.versions.push(String(version))
}

const report = {
	componentVersion: COMPONENT_VERSION,
	shopiframeCollections: collections,
	cmsDetailPages: pages.filter((path) => path.includes(':')),
	pages,
	shopiframeComponents: components,
	outdatedComponents: Object.values(components).reduce((sum, entry) => sum + entry.outdated, 0),
	notes: [
		collections.length === 0 ? 'No Shopiframe collection: the user sets up the CMS in the Shopiframe plugin (Store Configuration).' : null,
		collections.some((c) => c.itemsWithValidProductData < c.items) ? 'Some items lack valid Product Data: the user opens the Shopiframe collection in the CMS and clicks Sync.' : null,
		'The store config snippet is plugin-owned and invisible to this session; ask the user if components show no store data.',
	].filter(Boolean),
}
state.shopiframe = report
console.log(JSON.stringify(report, null, 2))
