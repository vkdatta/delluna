export const name="shopping_cart_checkout";
export const id="dl_6513db2803596ac85444";
export const url=new URL("../icons/shopping_cart_checkout.svg?v=6b88202dd14288b533024c9fa37ac43ae1b96b02b641e8723b610a234c9383c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
