export const name="battery_charging_20_2-fill";
export const id="dl_86d8975fa6b6f1ff5b0e";
export const url=new URL("../icons/battery_charging_20_2-fill.svg?v=529ecec66060eec19619c4038016e1e78fc5112c34402044fc7e69b6916c4a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
