export const name="map-pin-simple-area-fill";
export const id="dl_f68fa264bb794a0e9fc0";
export const url=new URL("../icons/map-pin-simple-area-fill.svg?v=5ee3a9643d3e04d106cc1d15eac5fa5e9dd97302d5ecc05a19404abeee2448ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
