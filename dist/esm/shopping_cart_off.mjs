export const name="shopping_cart_off";
export const id="dl_ec9fbe4907b7a349ba28";
export const url=new URL("../icons/shopping_cart_off.svg?v=8b3d58212181da661fb83b0aa73683fcaae57e3cfd4dfa318007fa8b6bcee79d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
