export const name="battery_charging_full";
export const id="dl_869a818ac2fb49d7bb0c";
export const url=new URL("../icons/battery_charging_full.svg?v=050bf96997158b315d509bd2e59f27245ad13d655e8f541c314792b885db73b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
