export const name="video_camera_front_off-fill";
export const id="dl_d13cff053769d3c231ee";
export const url=new URL("../icons/video_camera_front_off-fill.svg?v=bdd615602ea8b12e96e0a3f63cc2ee1c2793b9de3c9db6049cd77159c34f7291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
