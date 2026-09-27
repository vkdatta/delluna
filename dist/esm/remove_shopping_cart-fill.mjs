export const name="remove_shopping_cart-fill";
export const id="dl_2df5e2a9e766b416597d";
export const url=new URL("../icons/remove_shopping_cart-fill.svg?v=6e16b450efd60645137bf69326b687f421a9538bc28f19167e55013dca1047bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
