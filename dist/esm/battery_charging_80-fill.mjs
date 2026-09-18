export const name="battery_charging_80-fill";
export const id="dl_cfb0776b7e5d4f009ff7";
export const url=new URL("../icons/battery_charging_80-fill.svg?v=c5adab6e0b9b31c3f23b1863c839f6db944af2faffbf472a29b55bb870e25960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
