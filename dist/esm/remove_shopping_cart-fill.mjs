export const name="remove_shopping_cart-fill";
export const id="dl_37103081c24dcd8514c3";
export const url=new URL("../icons/remove_shopping_cart-fill.svg?v=dadcfd6f2104e93c96900b265182eeb77c40f0d57036a11d37f245e0ab2822e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
