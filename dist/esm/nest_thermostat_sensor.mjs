export const name="nest_thermostat_sensor";
export const id="dl_1334d9d9ccc7cc60b6b2";
export const url=new URL("../icons/nest_thermostat_sensor.svg?v=5288c62c6690fd0a5e53663f69bc6792fe7843c522f436433da7a068f6132a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
