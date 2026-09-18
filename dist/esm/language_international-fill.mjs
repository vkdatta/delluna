export const name="language_international-fill";
export const id="dl_9f05bdf56073448eb4cb";
export const url=new URL("../icons/language_international-fill.svg?v=ce1956e6d9621a66a0c0b44027ccdb33599dfdad12455a2f4171eade520fc1bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
