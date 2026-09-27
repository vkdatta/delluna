export const name="water_heater-fill";
export const id="dl_eb75864d2d46e68c28e7";
export const url=new URL("../icons/water_heater-fill.svg?v=f9f5d5b0aaa3f8f4322adebb9f02cabab39d8402baf86d3fa07df346b5b69609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
