export const name="space_dashboard_2-fill";
export const id="dl_3074764ce8afdea9a6ba";
export const url=new URL("../icons/space_dashboard_2-fill.svg?v=a2c69559bf106da62004a4e401c624d4e9855f15103adc2eecce1ff6d282060d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
