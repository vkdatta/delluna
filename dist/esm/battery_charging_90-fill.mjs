export const name="battery_charging_90-fill";
export const id="dl_e6cd330fa0244831a734";
export const url=new URL("../icons/battery_charging_90-fill.svg?v=58f003ad89034cb8493ad45ca60c529605e48b66ab3609fb853a0091c3752d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
