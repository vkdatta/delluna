export const name="mobile_sensor_hi";
export const id="dl_572852f4800c28e1b7bf";
export const url=new URL("../icons/mobile_sensor_hi.svg?v=8a381eba5a6864cda3236b0dd456f7332ba3bee8674666301855ed0365132e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
