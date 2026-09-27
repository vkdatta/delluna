export const name="battery_charging_20-fill";
export const id="dl_a40b5eb160e0ae0ea6ff";
export const url=new URL("../icons/battery_charging_20-fill.svg?v=735ff523045b8877d681a3acfa7bad4f4bbda532ffbe610013c98dd58aec856b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
