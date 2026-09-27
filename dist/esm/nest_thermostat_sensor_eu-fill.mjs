export const name="nest_thermostat_sensor_eu-fill";
export const id="dl_877a4801454993cb0e24";
export const url=new URL("../icons/nest_thermostat_sensor_eu-fill.svg?v=7ccba8077a5a56c4f8a16aadf3eac329a0bca2507a15b421ac108e531417c7b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
