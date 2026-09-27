export const name="inventory_2-fill";
export const id="dl_4b0bc5447e64a4075f0b";
export const url=new URL("../icons/inventory_2-fill.svg?v=8041da57cf5a83860decfd2c3eff7eb05182c4dea864adefa0cfac2a156467f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
