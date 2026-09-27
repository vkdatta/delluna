export const name="arrow_upward";
export const id="dl_bc6107ef6ea0edab15f5";
export const url=new URL("../icons/material_symbols/arrow_upward.svg?v=edecdcc67816219b947fc9a6d81d4f18b68e5ff293eb3265421dd4db19c86e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
