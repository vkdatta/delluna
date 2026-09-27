export const name="nest_thermostat_sensor_eu-fill";
export const id="dl_d3a3d0719f4730c51ee7";
export const url=new URL("../icons/nest_thermostat_sensor_eu-fill.svg?v=23d7426c0ecd2c686249de4f9a818de7d4e003d8d4327f08f2b4fb48f701877e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
