export const name="smiley-fill";
export const id="dl_446c3831dbd54a1099ad";
export const url=new URL("../icons/S/smiley-fill.svg?v=2f993043ef4566931f5ad81be6d1030734d2dbad5e5d7c5d380debfeaeeb9399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
