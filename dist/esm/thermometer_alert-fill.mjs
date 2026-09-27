export const name="thermometer_alert-fill";
export const id="dl_3704f086561ef09cbaea";
export const url=new URL("../icons/thermometer_alert-fill.svg?v=488bca68921373e0f186adc4021e163f858da1145de8fc96ddff9aa94e55ec16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
