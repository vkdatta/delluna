export const name="chart-scatter-bold";
export const id="dl_1d521f5184824ba68e78";
export const url=new URL("../icons/chart-scatter-bold.svg?v=75cf17853e15b695c747505369a95dd39909902963d5986a7a13262f95a8c16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
