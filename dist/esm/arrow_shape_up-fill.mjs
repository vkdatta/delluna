export const name="arrow_shape_up-fill";
export const id="dl_742a57c6778a4330842a";
export const url=new URL("../icons/arrow_shape_up-fill.svg?v=b38bba1d6eb88ebcb186161bbaf0f5623e81a83d7df6c978f2aa416c72cbd6ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
