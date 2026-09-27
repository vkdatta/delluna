export const name="lucid_3-shopping-cart";
export const id="dl_56899e4c8e13428ab511";
export const url=new URL("../icons/lucid_3-shopping-cart.svg?v=f43fef995cc43fa1771733d3182ee3e0198371619cf7025f88584965a7cb2e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
