export const name="shopping_cart_off";
export const id="dl_7feeb7cd01d9602e5110";
export const url=new URL("../icons/shopping_cart_off.svg?v=f1e1e661a8be3b32f91164356447a300ff875722e769c538325b7f856b417313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
