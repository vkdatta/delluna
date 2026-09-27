export const name="shopping_cart";
export const id="dl_6c0fa1e61720fb99220d";
export const url=new URL("../icons/shopping_cart.svg?v=82212f3fb906d5d26f251f6fe6799641b5f1c32ca828481b71f5a385e8cd28bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
