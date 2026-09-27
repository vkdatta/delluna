export const name="lucid_2-hotel";
export const id="dl_685e53f2b32144a2a77f";
export const url=new URL("../icons/lucid_2-hotel.svg?v=5e9ff313b6748b0ccb454c4c2870c131beeb28fc1f20509bac49e1f53c65f7b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
