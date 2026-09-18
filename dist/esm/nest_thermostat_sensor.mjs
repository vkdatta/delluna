export const name="nest_thermostat_sensor";
export const id="dl_4597e8bcff0b4524ad14";
export const url=new URL("../icons/nest_thermostat_sensor.svg?v=84301f5f9b5b74261e4758a739f2c956a77d3a99cd376fa9b1cba623b80ad0c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
