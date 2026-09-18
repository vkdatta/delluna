export const name="garden_cart-fill";
export const id="dl_7149a0a0a91d4b9b9ac1";
export const url=new URL("../icons/garden_cart-fill.svg?v=19073b4036fbf9dccfdc83906f19bebf68e9f9b2817cd7dbc63214896f738761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
