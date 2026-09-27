export const name="battery_charging_20-fill";
export const id="dl_c5ae52ee82b2dc79a120";
export const url=new URL("../icons/battery_charging_20-fill.svg?v=a688bd253348146ff23b6390235b9ca8b1b9ae231c982b15feaaeeb877d826c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
