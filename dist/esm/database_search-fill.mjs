export const name="database_search-fill";
export const id="dl_2dc7a70093e2f948f3de";
export const url=new URL("../icons/database_search-fill.svg?v=82ddc1802ce40a1d79291f5673a7e21925dac114dab3b6ad5a793072a44c2d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
