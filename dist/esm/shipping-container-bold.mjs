export const name="shipping-container-bold";
export const id="dl_469eba443e1016be9918";
export const url=new URL("../icons/shipping-container-bold.svg?v=5781728620a945628323bb6e18dfc27b101e12ab3b213484a39bfd08faf0f8e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
