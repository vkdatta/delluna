export const name="offline_pin_off";
export const id="dl_e3f67e7d23a04df0bc46";
export const url=new URL("../icons/offline_pin_off.svg?v=59623be2a1db483ff3536e93829655b0a4456d4ed07d8dcdb7c849e5afff1ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
