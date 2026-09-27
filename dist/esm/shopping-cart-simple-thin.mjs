export const name="shopping-cart-simple-thin";
export const id="dl_8aeaeea93b19557d3f5b";
export const url=new URL("../icons/shopping-cart-simple-thin.svg?v=d9b31e7ef8d31200c5ced9f5d9256a442a22b18bd6ebd2b5c8c1a1e0eb1a0e60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
