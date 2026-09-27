export const name="battery_charging_90-fill";
export const id="dl_00705ce8e1efcbd77a57";
export const url=new URL("../icons/battery_charging_90-fill.svg?v=5d6c494f7e2a77cdc5c0b849fae9e9a9ce6e54a4eb3caf331fdf9fc8a280f241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
