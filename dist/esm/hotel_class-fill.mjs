export const name="hotel_class-fill";
export const id="dl_a5fd8413bc172809426d";
export const url=new URL("../icons/hotel_class-fill.svg?v=a8ede4fc49ab2885753d611993a3ed62138adc154d1ac62aee952ab7140d245f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
