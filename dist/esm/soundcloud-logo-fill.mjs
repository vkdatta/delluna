export const name="soundcloud-logo-fill";
export const id="dl_da141d0c0167991be189";
export const url=new URL("../icons/soundcloud-logo-fill.svg?v=b0703c11e660f6eedb69e349421a51c9acdb39656e7d3e0beace9c00441093a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
