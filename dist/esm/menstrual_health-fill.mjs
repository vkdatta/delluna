export const name="menstrual_health-fill";
export const id="dl_88aece1348a0be65acce";
export const url=new URL("../icons/menstrual_health-fill.svg?v=0d65c1e7b97613fbb11a90cee070bda229b6b9a3855c7ad8f8e1ea936481ad1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
