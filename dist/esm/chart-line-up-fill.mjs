export const name="chart-line-up-fill";
export const id="dl_0a78d5ad2d73452a897a";
export const url=new URL("../icons/chart-line-up-fill.svg?v=93a5d3f19b73fc28a2df488a6275292fa5b2cd2157c123d5d763258413453dd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
