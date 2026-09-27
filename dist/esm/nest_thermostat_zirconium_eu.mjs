export const name="nest_thermostat_zirconium_eu";
export const id="dl_7c4d4678d00e1ef916cb";
export const url=new URL("../icons/nest_thermostat_zirconium_eu.svg?v=9283bd1bdb52eaff4b6e7f8ee023dbc0b06ed5bf75b46a13d245f88974f2cfa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
