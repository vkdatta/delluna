export const name="shopping_cart";
export const id="dl_dbd3005b84ec43788e12";
export const url=new URL("../icons/S/shopping_cart.svg?v=6005a9c4e5bf868d14b42b57ce72d349014cee465e0beba8a2f4be2e582bf4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
