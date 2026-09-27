export const name="chart-donut-duotone";
export const id="dl_03f34a473c1f4238959a";
export const url=new URL("../icons/chart-donut-duotone.svg?v=4c981513e33e1a65c1c1c7927335278a7371813a6c2e620517e83eed940ddd1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
