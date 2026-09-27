export const name="garden_cart-fill";
export const id="dl_05d9299b73f46effe7a6";
export const url=new URL("../icons/garden_cart-fill.svg?v=9ede17af6ac96759612ead1c7a65bed28db9bf81be98c5c424ee85b4ca943f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
