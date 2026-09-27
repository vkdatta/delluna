export const name="battery_alert";
export const id="dl_05d51d39d34c734112b2";
export const url=new URL("../icons/battery_alert.svg?v=e261e3969232da547173236ed0f0fcaf0a15775852c496e74e16a8bd1950e6c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
