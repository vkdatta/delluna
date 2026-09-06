export const name="device-tablet-camera-light";
export const id="dl_16ac3c1127c14b4699dc";
export const url=new URL("../icons/device-tablet-camera-light.svg?v=19d38a6ff4da050aab1b24860ff37f1adc095c484d9e15a878f7efcc832ea6a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
