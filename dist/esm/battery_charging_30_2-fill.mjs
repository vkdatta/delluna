export const name="battery_charging_30_2-fill";
export const id="dl_748aa3c4eac230644284";
export const url=new URL("../icons/battery_charging_30_2-fill.svg?v=c0543bf3f9e33b5377fa92d2a2cbca6330228dd907802f12f04b49e95b54b605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
