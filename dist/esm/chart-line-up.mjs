export const name="chart-line-up";
export const id="dl_b6ce2a5080b04ebd975f";
export const url=new URL("../icons/chart-line-up.svg?v=1a02940bd43226ef0c507f9a3fed6a8175f10ca8d63a0da2a9a9bc64879d4456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
