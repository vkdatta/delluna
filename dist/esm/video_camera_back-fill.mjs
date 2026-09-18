export const name="video_camera_back-fill";
export const id="dl_c625772bf7a04a3eb3d5";
export const url=new URL("../icons/V/video_camera_back-fill.svg?v=02033d60855f21dd274d9f1c62e23df8a9162a2d4d415e40a99fe5bd145e3f48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
