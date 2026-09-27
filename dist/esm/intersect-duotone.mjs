export const name="intersect-duotone";
export const id="dl_5a77f51777ce4d84b31b";
export const url=new URL("../icons/intersect-duotone.svg?v=2d94b883b676a6f4a804b3663f237963a4a6949f2c8fb15c385df6317a275202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
