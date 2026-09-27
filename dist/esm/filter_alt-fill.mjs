export const name="filter_alt-fill";
export const id="dl_aade72d8daa822945be5";
export const url=new URL("../icons/filter_alt-fill.svg?v=3c1f780d0d2b182e722666736e2e67e8a7305638464a525183d3c6a675840b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
