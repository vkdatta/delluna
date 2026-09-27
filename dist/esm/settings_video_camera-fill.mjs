export const name="settings_video_camera-fill";
export const id="dl_f3206b24a41016a819bb";
export const url=new URL("../icons/settings_video_camera-fill.svg?v=4d93fb2014b871f973b549e5e591692a9fdd23d67bbd19470174b3c45f6d64b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
