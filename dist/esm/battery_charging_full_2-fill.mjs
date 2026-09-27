export const name="battery_charging_full_2-fill";
export const id="dl_5535ecc0971d15334bf8";
export const url=new URL("../icons/battery_charging_full_2-fill.svg?v=ae0974038be7cd764b482510b0a568261f9227cf831e47d1604f5f46112feb19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
