export const name="shutter_speed-fill";
export const id="dl_24a40254ffd1bd5774b0";
export const url=new URL("../icons/shutter_speed-fill.svg?v=3ebf892b12c959169b4a5d01d29ba64d9921398639ae38a1793741b4b0d64853",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
