export const name="video_camera_back_add-fill";
export const id="dl_c534278778aa1ec97487";
export const url=new URL("../icons/video_camera_back_add-fill.svg?v=628d7692d427d9468550a95f004aa64677d6e6f2f1b4d4c7dca26a06ae3dc4c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
