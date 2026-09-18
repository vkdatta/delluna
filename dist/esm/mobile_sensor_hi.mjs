export const name="mobile_sensor_hi";
export const id="dl_a63acef761774ba183ff";
export const url=new URL("../icons/mobile_sensor_hi.svg?v=0eb498d6fe53fc9f14993635448cdc2d6b67f565ecf3230d839b2d4b8e9a3e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
