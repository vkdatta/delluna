export const name="exposure_plus_1";
export const id="dl_8dc7b3fe12472eeb74ba";
export const url=new URL("../icons/exposure_plus_1.svg?v=5db5e08c68d6573b14ea4c1bdcc2c3b7b2040f212e27e7369eef9dcb3486426a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
