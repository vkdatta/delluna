export const name="video_camera_front-fill";
export const id="dl_3eefd4d5d5614e5ea674";
export const url=new URL("../icons/video_camera_front-fill.svg?v=9864595da2887135ffaad6288f12c2b2f2fd7f2c20f06dcf83405ce0ffa9d0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
