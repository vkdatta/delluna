export const name="chart-bar-horizontal-fill";
export const id="dl_0f8a1473923540329223";
export const url=new URL("../icons/chart-bar-horizontal-fill.svg?v=74d11b696da0fbf58d27a00354c9eedd8a0b7a1853f3af5651ad7691d2664a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
