export const name="lucid_3-map-pin-off";
export const id="dl_1451ba342b9d4d2e897f";
export const url=new URL("../icons/lucid_3-map-pin-off.svg?v=2cc5d339e65c1bfb2f0aa733b59f8f1351a74edba2289ca0fbdac0c56f087413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
