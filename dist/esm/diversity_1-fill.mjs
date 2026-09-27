export const name="diversity_1-fill";
export const id="dl_e1e90ca23ec53f14f7d2";
export const url=new URL("../icons/diversity_1-fill.svg?v=4e5db66c1b52fc583ed23e3c0c55b4623317600cc75ea711f8ddbb52e1f876b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
