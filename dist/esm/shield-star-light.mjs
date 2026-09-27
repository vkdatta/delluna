export const name="shield-star-light";
export const id="dl_7e60d1583dd09eb39b31";
export const url=new URL("../icons/shield-star-light.svg?v=5af5c757bda4a146400516aa3d7f892c1accdb5f072cb0f443649a6791bd3e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
