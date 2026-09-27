export const name="mobile_camera_rear-fill";
export const id="dl_20cf369b155e39db75fc";
export const url=new URL("../icons/mobile_camera_rear-fill.svg?v=7cb7861187a093c512abc0f3659d36e8f55cae49aca458e8a902b2bebd2371b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
