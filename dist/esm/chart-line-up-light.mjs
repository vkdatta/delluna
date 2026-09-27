export const name="chart-line-up-light";
export const id="dl_2b47cd6d465a4834b8e4";
export const url=new URL("../icons/chart-line-up-light.svg?v=c72367faab4a7a216200dbd6eea4f9ad815b2d138eb947db89a2695cdce1d3b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
