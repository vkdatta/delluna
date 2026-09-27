export const name="earbuds_battery";
export const id="dl_c3b2237723a953eb736a";
export const url=new URL("../icons/earbuds_battery.svg?v=3aecb87e2777281a7d5984d172f6eac4634807a41058c9952a3295879b28a8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
