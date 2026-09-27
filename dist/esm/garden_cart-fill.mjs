export const name="garden_cart-fill";
export const id="dl_b80915ad345614ce3208";
export const url=new URL("../icons/garden_cart-fill.svg?v=d41cec1216015df9efe60f342cd1b2edfb9645fca8afdcab16aeff3d5a4d7a76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
