export const name="device-mobile-camera";
export const id="dl_10e373756fec4e7ba554";
export const url=new URL("../icons/device-mobile-camera.svg?v=1bb85004b4aa61c616ebe66ce1455057a2f25b9fe07e0fd1dc74530e2b1b66b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
