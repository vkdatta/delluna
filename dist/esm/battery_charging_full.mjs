export const name="battery_charging_full";
export const id="dl_8a700088674ce1ac4fa6";
export const url=new URL("../icons/battery_charging_full.svg?v=b56d892f05232a19d7631751131b6d24e63a3d1a3a780870625738098afcc211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
