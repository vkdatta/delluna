export const name="battery_charging_60_2-fill";
export const id="dl_2625d388bd23484ba1cd";
export const url=new URL("../icons/battery_charging_60_2-fill.svg?v=c108f22bf2fdf0e4b251206681953dc5046ca861b1998c2d64847a47f78a23a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
