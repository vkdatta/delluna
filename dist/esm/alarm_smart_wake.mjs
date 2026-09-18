export const name="alarm_smart_wake";
export const id="dl_9b18c5d03a6f4061a941";
export const url=new URL("../icons/alarm_smart_wake.svg?v=7fcd69660bf18db0625ecefadd664c7e9eeedecd983a90fb4a08d89265a64d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
