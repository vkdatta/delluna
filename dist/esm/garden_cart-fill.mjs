export const name="garden_cart-fill";
export const id="dl_79c4dff309453eff8407";
export const url=new URL("../icons/garden_cart-fill.svg?v=3c44ae1fa9cd9c6099a4e2661191029bc2fffa3f82b525673c4d8f3cdfabf477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
