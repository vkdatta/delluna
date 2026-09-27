export const name="battery_status_good-fill";
export const id="dl_bd6844d300796c890a90";
export const url=new URL("../icons/battery_status_good-fill.svg?v=4384f80b6a2f80bfb926bdea1aafe2ba90465750daae3e1d0be59d17b6eefc88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
