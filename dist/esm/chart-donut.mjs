export const name="chart-donut";
export const id="dl_2178753e95194488b28b";
export const url=new URL("../icons/chart-donut.svg?v=aff31011fb0865c2f83528f475cf08ab77e1b65a58f80d760af34c80a94cd4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
