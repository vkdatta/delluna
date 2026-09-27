export const name="align_end-fill";
export const id="dl_a342d4070385c0eeeec4";
export const url=new URL("../icons/align_end-fill.svg?v=84656519852cff6f8cb26dd949a13a22a4633df478a839e34e5bcd290af482bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
