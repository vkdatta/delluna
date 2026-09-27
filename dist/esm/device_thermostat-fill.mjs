export const name="device_thermostat-fill";
export const id="dl_c67ea982e0b51a7f5040";
export const url=new URL("../icons/device_thermostat-fill.svg?v=217c252487626d693b37cd220ac1930178464738cd73bf79243d444a85f888ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
