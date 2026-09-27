export const name="battery_charging_80_2";
export const id="dl_1a7a8050195f9fc442d8";
export const url=new URL("../icons/battery_charging_80_2.svg?v=fda879c78a7817b84ed9d94398fdbc832c1745c334b5062474a3baa46854deef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
