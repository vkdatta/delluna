export const name="airport_shuttle";
export const id="dl_95ff61d8b929f036c34a";
export const url=new URL("../icons/airport_shuttle.svg?v=4489f64be1b76aaf7156cff5c9299b3a4e4f95203971eee2a949f333ebaaeecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
