export const name="inventory-fill";
export const id="dl_b0bca42d56c1fce99ca9";
export const url=new URL("../icons/inventory-fill.svg?v=ec9d9fd5df7269ada57f885add0dc0f850caa105449064e9f5a394a09ada268b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
