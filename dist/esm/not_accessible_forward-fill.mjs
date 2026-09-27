export const name="not_accessible_forward-fill";
export const id="dl_41ecc8247f0d1bb16b9f";
export const url=new URL("../icons/not_accessible_forward-fill.svg?v=f6e19c2b70a48b608c4a5d246ed004167dd728a70b0ab4bdab7f607251327ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
