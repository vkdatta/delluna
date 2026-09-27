export const name="battery_charging_full_2-fill";
export const id="dl_0b8e2d80063d0d05ec6d";
export const url=new URL("../icons/battery_charging_full_2-fill.svg?v=7a8c837c07ec834591cb064cc8acf024e7578ee8c15754fa253b1aef54641d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
