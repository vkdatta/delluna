export const name="door_sensor";
export const id="dl_af7d6480d8a0da9faa73";
export const url=new URL("../icons/door_sensor.svg?v=c47690ca430e534bd3093d27c68b74d2554e3208652deadaba55dc763717dcc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
