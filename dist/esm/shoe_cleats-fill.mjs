export const name="shoe_cleats-fill";
export const id="dl_ae9e8252cbcc4b43b425";
export const url=new URL("../icons/S/shoe_cleats-fill.svg?v=404b7c797a24e916b8b31f78a8e5a4aff3cb72dd095a143fdfe31085846c77fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
