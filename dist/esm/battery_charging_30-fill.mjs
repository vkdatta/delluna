export const name="battery_charging_30-fill";
export const id="dl_c428c05c23fa41bdbe76";
export const url=new URL("../icons/battery_charging_30-fill.svg?v=5c979c3941adf76386757468f44c47892271e7dd901b57782f50f73280e2b0d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
