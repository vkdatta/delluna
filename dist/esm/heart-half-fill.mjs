export const name="heart-half-fill";
export const id="dl_44b0ec5bdb3e4513a14d";
export const url=new URL("../icons/heart-half-fill.svg?v=ee71f96cce231b76dea9b7b4d9dc59ccbdfd129796c96ec62e755bfd4093d3e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
