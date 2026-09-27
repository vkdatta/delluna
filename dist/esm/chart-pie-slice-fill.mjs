export const name="chart-pie-slice-fill";
export const id="dl_98b0937a89524255a03c";
export const url=new URL("../icons/chart-pie-slice-fill.svg?v=3a2c404a5b4e34ccf129ea3b10cd07389b2b66378fbe8488ef4b873bb3abba13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
