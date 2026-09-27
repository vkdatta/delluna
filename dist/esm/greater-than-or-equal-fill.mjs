export const name="greater-than-or-equal-fill";
export const id="dl_d3ab93cd4b1d4621a40d";
export const url=new URL("../icons/greater-than-or-equal-fill.svg?v=dd114a8e8b97f95cce19c0c85782249598b4a139a4cb60a4910fffd84bd0e7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
