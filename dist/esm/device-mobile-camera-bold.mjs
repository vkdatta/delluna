export const name="device-mobile-camera-bold";
export const id="dl_59c492dc61544b4fbbc2";
export const url=new URL("../icons/device-mobile-camera-bold.svg?v=0477d04256649c266d956fd2f3e81ca6027f5e2985bd7e35e462bcacb7fe5151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
