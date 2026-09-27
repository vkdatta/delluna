export const name="shopping_cart-fill";
export const id="dl_b0c09e06a4d63795b52f";
export const url=new URL("../icons/shopping_cart-fill.svg?v=fe660685bdea9044cdbd86a9dcb3bae7c4fecabf8bb931b35644e3c3852aee0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
