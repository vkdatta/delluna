export const name="chart-donut-fill";
export const id="dl_32e63fcc267a46b09078";
export const url=new URL("../icons/chart-donut-fill.svg?v=69fbf04385fe20889680a1304d9ffaf562ff8793c05e245185d6986a06ff7a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
