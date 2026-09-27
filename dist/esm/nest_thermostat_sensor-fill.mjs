export const name="nest_thermostat_sensor-fill";
export const id="dl_79f461baabed25db42e6";
export const url=new URL("../icons/nest_thermostat_sensor-fill.svg?v=d9d6bc32a9004c7d9f7085d68f6946c645258f1a3cdd5f1ba44db576e002d3f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
