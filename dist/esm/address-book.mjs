export const name="address-book";
export const id="dl_a29f32c2b9864b82b83c";
export const url=new URL("../icons/address-book.svg?v=57825e9e5bd8fed2eb46f74abc87733e7d9f026fb169992b234b10d168d83247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
