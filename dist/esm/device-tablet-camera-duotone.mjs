export const name="device-tablet-camera-duotone";
export const id="dl_6158793358b14038a701";
export const url=new URL("../icons/device-tablet-camera-duotone.svg?v=685562435b4d23ffcd44be2be4b4d104db0f37ac4a1dce297488203c144e017c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
