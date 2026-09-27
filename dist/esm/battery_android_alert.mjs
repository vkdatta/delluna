export const name="battery_android_alert";
export const id="dl_0e20b88d68a7b23b0c2b";
export const url=new URL("../icons/battery_android_alert.svg?v=02bd1e7cdbda8a719b5c40b60af9fb596ac058dd2e799ab3712b1cbb638b0f64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
