export const name="video_camera_front-fill";
export const id="dl_2a9a68ce91c3d34ae5eb";
export const url=new URL("../icons/video_camera_front-fill.svg?v=f087e32e9d9f14c3f62d281f160a0c1e5ee9d0aabf959e1e4a4dfba2bbed4d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
