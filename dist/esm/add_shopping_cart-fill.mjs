export const name="add_shopping_cart-fill";
export const id="dl_d0786bce03c481066bfe";
export const url=new URL("../icons/add_shopping_cart-fill.svg?v=8a50ccbb1522e35468044ba634d490d111266123d472b1ab11638124143de759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
