export const name="chart-polar-thin";
export const id="dl_60e8cc6dc63445eabcfb";
export const url=new URL("../icons/chart-polar-thin.svg?v=17aeb0d3a65b6f29a81e44fb08fc4135df8d98bc14ceb95efcc89f572afcd3c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
