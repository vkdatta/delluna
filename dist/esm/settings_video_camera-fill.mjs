export const name="settings_video_camera-fill";
export const id="dl_0b3402c5e1d05554680c";
export const url=new URL("../icons/settings_video_camera-fill.svg?v=396eeb5a8873f5ec9728e4a9539559a042209356df4d61b57b3226778d6eb5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
