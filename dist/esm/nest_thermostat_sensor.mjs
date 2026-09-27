export const name="nest_thermostat_sensor";
export const id="dl_52032c8eabce40b4244b";
export const url=new URL("../icons/nest_thermostat_sensor.svg?v=2a62ac1b8d767d1cc3f943d9c244645f6cb203e6128fd6d9d4f9a33c244aabe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
