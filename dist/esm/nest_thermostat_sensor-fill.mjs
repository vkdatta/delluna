export const name="nest_thermostat_sensor-fill";
export const id="dl_023ad5b884af8d4b0325";
export const url=new URL("../icons/nest_thermostat_sensor-fill.svg?v=76a5deb2db8c19172298d02a1dbdc207900971fb1ae1699c4d5f5a574e7a4c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
