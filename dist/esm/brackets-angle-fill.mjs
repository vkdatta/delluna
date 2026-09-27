export const name="brackets-angle-fill";
export const id="dl_a241307d59934fe48e3c";
export const url=new URL("../icons/brackets-angle-fill.svg?v=a549e144211c94677d3ce7f56be9cd0cdab78f86773eb7dab95058c49bc737fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
