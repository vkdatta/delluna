export const name="door_sensor";
export const id="dl_abffcf52fac483e7413f";
export const url=new URL("../icons/door_sensor.svg?v=aa1fab3fd3494b3c2699bd40ce36f4d66a2d5605e380b9c211223ec812a9c9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
