export const name="video_camera_back_add";
export const id="dl_c0b62fdf9fbeede7996f";
export const url=new URL("../icons/video_camera_back_add.svg?v=d5c2c0f4dd7946815a121e882c13376646f1f1834c279ffc580e44fdfb6ca215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
