export const name="nest_thermostat_sensor_eu";
export const id="dl_ab2b5860b8be4a079fc1";
export const url=new URL("../icons/N/nest_thermostat_sensor_eu.svg?v=63ac4507b1f25a25f63fd2eaf626d486636197c1e0a058476059132dbe173836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
