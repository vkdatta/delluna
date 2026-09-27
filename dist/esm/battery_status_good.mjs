export const name="battery_status_good";
export const id="dl_0c6a5c027f0bafa58bfd";
export const url=new URL("../icons/battery_status_good.svg?v=71c25f89d34d88c55237df6b25f2a80beea177fb3755b900c6f59e948f5543e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
