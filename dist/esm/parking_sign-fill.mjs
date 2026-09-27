export const name="parking_sign-fill";
export const id="dl_410041766d2a4e40aeae";
export const url=new URL("../icons/parking_sign-fill.svg?v=3b3a8962d9ff48668968be83a4411e08203256697210291af637406d0414007f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
