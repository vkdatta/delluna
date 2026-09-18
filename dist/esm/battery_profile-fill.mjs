export const name="battery_profile-fill";
export const id="dl_8ada5030dc694455b2b0";
export const url=new URL("../icons/battery_profile-fill.svg?v=09038e55bc2ec6033927ddc06edf2a93d525458390938e4dfaf33dd539afbafa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
