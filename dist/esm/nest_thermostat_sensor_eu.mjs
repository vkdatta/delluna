export const name="nest_thermostat_sensor_eu";
export const id="dl_3039c92ba7950bda36af";
export const url=new URL("../icons/nest_thermostat_sensor_eu.svg?v=e96ad5058fb642954370c86edf5f33dda0369d7ed68a99e3c47d2c24a7dc2ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
