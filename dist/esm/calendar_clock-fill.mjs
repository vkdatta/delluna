export const name="calendar_clock-fill";
export const id="dl_d28c1c4d6ec7749661b2";
export const url=new URL("../icons/calendar_clock-fill.svg?v=a47b74ad844af593c52841007d12fe7be663197bbb0295560b2e7042a0cd93a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
