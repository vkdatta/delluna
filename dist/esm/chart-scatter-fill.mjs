export const name="chart-scatter-fill";
export const id="dl_130e0e9a41d94185953f";
export const url=new URL("../icons/chart-scatter-fill.svg?v=199bf5fef95ccb881f6732d38bdb57115f5a235f8f81873bdf176f234b87efdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
