export const name="chart-donut-fill";
export const id="dl_32e63fcc267a46b09078";
export const url=new URL("../icons/chart-donut-fill.svg?v=c5305540022fdc4586b2ef0fae30f95b7563a0cd35f3d4873f993ab9840dff8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
