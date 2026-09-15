export const name="door_sensor";
export const id="dl_9de9c4db6a4b4bdc8500";
export const url=new URL("../icons/D/door_sensor.svg?v=2c11c5e67eaa9104a8bd61261a6122162cd0d59f403b605a97cb148cdebf48dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
