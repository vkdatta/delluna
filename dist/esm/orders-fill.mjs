export const name="orders-fill";
export const id="dl_51479a58716146098d9a";
export const url=new URL("../icons/O/orders-fill.svg?v=cc5ba5a4ac9d55a4eaa89387ae7b9a5484167a17206d12a382e11730ae6581cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
