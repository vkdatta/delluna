export const name="battery_android_alert-fill";
export const id="dl_13a94632b97d649c21aa";
export const url=new URL("../icons/battery_android_alert-fill.svg?v=4e976fcacf4aebf6da065acfb2036c06dc29030799f9b3660f7b2eacca732ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
