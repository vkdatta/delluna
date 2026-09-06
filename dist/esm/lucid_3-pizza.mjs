export const name="lucid_3-pizza";
export const id="dl_ccafa7455d214b9f9609";
export const url=new URL("../icons/lucid_3-pizza.svg?v=5cd03305e528300e763ad5f11215ee848583dd0b9bcccbdbe968a214de04faed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
