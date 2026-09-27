export const name="nest_thermostat_sensor_eu-fill";
export const id="dl_df6d7dfa20ed024707b9";
export const url=new URL("../icons/nest_thermostat_sensor_eu-fill.svg?v=f35d44e8afd86d2c9c2cfa337ec2ed8478701e7dc2b7990aec75c75ce83434c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
