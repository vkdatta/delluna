export const name="nest_thermostat_sensor-fill";
export const id="dl_62951cf1a834609ca61c";
export const url=new URL("../icons/nest_thermostat_sensor-fill.svg?v=030ec0b788770e1d2b5f8825aa13bf29125180c0c4c8e956e08e55c5790581da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
