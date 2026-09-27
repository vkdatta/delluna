export const name="nest_thermostat_sensor_eu";
export const id="dl_0a87760c393c14a391f5";
export const url=new URL("../icons/nest_thermostat_sensor_eu.svg?v=47237a0e2cbe9e0d28ded958b397583f166f01699c0b514096bf38f386a6887a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
