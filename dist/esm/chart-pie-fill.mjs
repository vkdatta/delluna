export const name="chart-pie-fill";
export const id="dl_56d3c7a27c994b44aad5";
export const url=new URL("../icons/chart-pie-fill.svg?v=6358807dc1ad62aea5c9a51103d6818147f572b3c658683c0a8f89082fbcce31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
