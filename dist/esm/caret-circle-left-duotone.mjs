export const name="caret-circle-left-duotone";
export const id="dl_07c6b11237c64303b626";
export const url=new URL("../icons/caret-circle-left-duotone.svg?v=d3476fbcd1e0a188e3c7aff033e59f4a71e06aa2640c9fcc04fafcceaee2e72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
