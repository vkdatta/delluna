export const name="device_thermostat-fill";
export const id="dl_a806ca4696d8b50ee844";
export const url=new URL("../icons/device_thermostat-fill.svg?v=2260cb2f76cf488514fff89876881f40569ea0bbb84fa81b078f3a85e2d7d261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
