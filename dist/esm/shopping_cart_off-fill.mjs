export const name="shopping_cart_off-fill";
export const id="dl_ec84da557fd00410291f";
export const url=new URL("../icons/shopping_cart_off-fill.svg?v=8efb9f7037df105ecd0de83154aed0fa3ae45fb181f41a7db41f4b97995256fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
