export const name="nest_thermostat_zirconium_eu-fill";
export const id="dl_0fedb96b19ec80837d87";
export const url=new URL("../icons/nest_thermostat_zirconium_eu-fill.svg?v=78bb5f2c32d57065e13d540ce7a35350328a56b1004bd12d3c2bedfe0463f555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
