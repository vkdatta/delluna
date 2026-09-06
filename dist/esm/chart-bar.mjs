export const name="chart-bar";
export const id="dl_acf01a98716142e58c5e";
export const url=new URL("../icons/chart-bar.svg?v=d161e503af4f5386a370ffd742d19d85e98625fd6d6eadbabbdb36d58dcca22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
