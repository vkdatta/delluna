export const name="remove_shopping_cart-fill";
export const id="dl_495f4fc974f9dcc76dcb";
export const url=new URL("../icons/remove_shopping_cart-fill.svg?v=39f4d42c7d2fef830e0bee7cb5efb2750b2691a58d79ef90357fa3b6a8023db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
