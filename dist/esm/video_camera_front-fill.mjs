export const name="video_camera_front-fill";
export const id="dl_4fdc4c6160b5dafc42d9";
export const url=new URL("../icons/video_camera_front-fill.svg?v=102e675c5bdb2773ea3d458c612d3411dd72cd426d11599858304fa8f1bd4455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
