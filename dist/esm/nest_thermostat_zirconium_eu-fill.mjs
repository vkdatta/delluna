export const name="nest_thermostat_zirconium_eu-fill";
export const id="dl_2cecb622028a541ecdc5";
export const url=new URL("../icons/nest_thermostat_zirconium_eu-fill.svg?v=402153039efbc43ff47a5b9dbc1ccc144db1c9a2c99062c96242872f240b3981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
