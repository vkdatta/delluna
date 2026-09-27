export const name="battery_charging_30_2-fill";
export const id="dl_1f2868159333b3d13d2e";
export const url=new URL("../icons/battery_charging_30_2-fill.svg?v=7ec8c6a7ff08f39f1f7604c1f25b3f1b0a0dcaad11dc136920c4d0a623459856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
