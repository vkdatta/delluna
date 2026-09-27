export const name="shield_person-fill";
export const id="dl_58e174fc2864dcdfb6d8";
export const url=new URL("../icons/shield_person-fill.svg?v=a24bb90023b9791f77217901a1716afad5656897302075e308064543b1371e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
