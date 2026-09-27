export const name="battery_charging_80-fill";
export const id="dl_5561b5b097e00d06a6ce";
export const url=new URL("../icons/battery_charging_80-fill.svg?v=0ad5d950356dc1fcd5a0585585f0d07711962d909d7e5e1208d8793edd0cfeb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
