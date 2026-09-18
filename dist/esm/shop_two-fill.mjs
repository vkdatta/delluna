export const name="shop_two-fill";
export const id="dl_9e4ff829c7ab4d9d95c8";
export const url=new URL("../icons/shop_two-fill.svg?v=65f0870f78c368ddcc902dcad21976aaff50decb6719307692fa151ad4ed9362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
