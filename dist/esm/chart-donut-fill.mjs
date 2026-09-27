export const name="chart-donut-fill";
export const id="dl_32e63fcc267a46b09078";
export const url=new URL("../icons/chart-donut-fill.svg?v=40175da10deb943bf38e865aca5fd04541c200ffa32e26b4a0ee532e01e28db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
