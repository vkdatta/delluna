export const name="garden_cart";
export const id="dl_3631cdf237351f41ad1f";
export const url=new URL("../icons/garden_cart.svg?v=edb407443307bcf66288d858ae836ad266ef3fc9089c5054cd3aa731e24a8a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
