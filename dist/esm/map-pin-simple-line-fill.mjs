export const name="map-pin-simple-line-fill";
export const id="dl_5adbeec119754d919b5f";
export const url=new URL("../icons/map-pin-simple-line-fill.svg?v=bd5f92ac079302a3528d7b92f951af3e38caee99e7fbee98e6b0a8dbd4d5a86e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
