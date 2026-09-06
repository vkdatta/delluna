export const name="device-mobile-camera-bold";
export const id="dl_59c492dc61544b4fbbc2";
export const url=new URL("../icons/device-mobile-camera-bold.svg?v=32d3ec079793583881b5c6fccefb0fd318eb585dcd0c57b91d537bf4ee7227d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
