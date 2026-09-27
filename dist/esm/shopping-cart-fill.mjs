export const name="shopping-cart-fill";
export const id="dl_8c18b3a0850233de91b6";
export const url=new URL("../icons/shopping-cart-fill.svg?v=ae1b3d159b32644072cdcb085fde351ac94013050c83a44c16bff18545820c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
