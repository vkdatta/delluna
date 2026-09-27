export const name="battery_charging_20_2-fill";
export const id="dl_eba32de04dcd51012b56";
export const url=new URL("../icons/battery_charging_20_2-fill.svg?v=9989d8e87fdd1df07f558c7436ec3330c63f7b92555da17fb7238be0d9321174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
