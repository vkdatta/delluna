export const name="moving_beds-fill";
export const id="dl_5e1ac330b7e52f2c2901";
export const url=new URL("../icons/moving_beds-fill.svg?v=98cdf46b671201d42dc7e60a65604458fb009f02c609ca9d9a9cfc5dbede9886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
