export const name="battery_charging_80_2";
export const id="dl_0aa1f133411ec2d12c39";
export const url=new URL("../icons/battery_charging_80_2.svg?v=a240951bd26994135afa8f7c270d1204a5da70f0681221d0741b56c6b12a2747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
