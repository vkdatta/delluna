export const name="battery_charging_20-fill";
export const id="dl_0f0764e89579e5668d6f";
export const url=new URL("../icons/battery_charging_20-fill.svg?v=073ea72f1b320612b793d3747dc289965420afd80721de11839b35201a64fba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
