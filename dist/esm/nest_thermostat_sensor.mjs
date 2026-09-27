export const name="nest_thermostat_sensor";
export const id="dl_4e67be907101d60d97e6";
export const url=new URL("../icons/nest_thermostat_sensor.svg?v=36ab43a29e82083aec4adb5ea24858441e3eb25a2daeb2c8794fe9bd4f811fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
