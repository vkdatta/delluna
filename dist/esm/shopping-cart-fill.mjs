export const name="shopping-cart-fill";
export const id="dl_5ac8c51294bb270ace62";
export const url=new URL("../icons/shopping-cart-fill.svg?v=6fc2635fe4c623ad28ecd8cc97c024b3cc785070e17c6e695854da78e02ae0d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
