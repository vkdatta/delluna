export const name="phone_locked-fill";
export const id="dl_3790619ea5794d67ed42";
export const url=new URL("../icons/phone_locked-fill.svg?v=1e12b2ef671cf71fcf15d79cce29ff8ab8a5c28e3d3854e657c5cf4f2ea3f83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
