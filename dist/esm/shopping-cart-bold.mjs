export const name="shopping-cart-bold";
export const id="dl_59f7571be624984c8170";
export const url=new URL("../icons/shopping-cart-bold.svg?v=ab8902311f83c54d5f03a7f0a660b219f13bdae4ce5870337b57d2607bef7960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
