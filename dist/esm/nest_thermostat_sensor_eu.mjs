export const name="nest_thermostat_sensor_eu";
export const id="dl_128ffb526f6f8594951d";
export const url=new URL("../icons/nest_thermostat_sensor_eu.svg?v=00f177b2283e16b9f98d4f0588f9814c7d1ab0143aaad2dffce78fef4a6f7faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
