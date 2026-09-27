export const name="battery_charging_50_2-fill";
export const id="dl_9f39d2d742b47ccd9b82";
export const url=new URL("../icons/battery_charging_50_2-fill.svg?v=149b705c756acfb77a864a4c42856d38eb74582239b1b487828dfb12a909b859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
