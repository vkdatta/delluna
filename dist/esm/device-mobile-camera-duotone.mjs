export const name="device-mobile-camera-duotone";
export const id="dl_2986847f2d7948ddbee8";
export const url=new URL("../icons/device-mobile-camera-duotone.svg?v=28c977241100620cd7753ef676574be683c05932d620d6ebd47b3e717c13d61d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
