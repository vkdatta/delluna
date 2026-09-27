export const name="arrow-clockwise-light";
export const id="dl_170e6bac50f64a9eba2f";
export const url=new URL("../icons/arrow-clockwise-light.svg?v=366292cccbab15548a2620f55f4f195ae8324cd2a58be262900ec69d0f11c2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
