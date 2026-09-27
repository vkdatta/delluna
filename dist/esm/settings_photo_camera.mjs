export const name="settings_photo_camera";
export const id="dl_2291ec2305a700447dc0";
export const url=new URL("../icons/settings_photo_camera.svg?v=409dfe80192658eaf03c8a3635506e6d116ec58f0b7d3f7e9cadf41c0b804abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
