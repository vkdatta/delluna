export const name="swap-fill";
export const id="dl_efe3f0f7235948cdbe0e";
export const url=new URL("../icons/S/swap-fill.svg?v=5eb0de3f0492e9a1ad1634fe1e0b0564b237919fc7626e9f88f6d5a967055ab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
