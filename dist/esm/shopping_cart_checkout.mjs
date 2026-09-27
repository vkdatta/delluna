export const name="shopping_cart_checkout";
export const id="dl_d5aafe1eecb2fdf2fda1";
export const url=new URL("../icons/shopping_cart_checkout.svg?v=d548ba45f5edeb57f5f9e6f55831c4412ae85fbb42ee56ddf7ed5c2fc78c3272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
