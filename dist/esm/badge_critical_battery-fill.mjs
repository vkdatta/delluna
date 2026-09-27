export const name="badge_critical_battery-fill";
export const id="dl_b5e78d187f218dccaaee";
export const url=new URL("../icons/badge_critical_battery-fill.svg?v=0f855d9ab0f82327faf71b5237f86361bd95129f3cc00a57120de6dffa9fbf84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
