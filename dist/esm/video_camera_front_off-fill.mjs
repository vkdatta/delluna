export const name="video_camera_front_off-fill";
export const id="dl_6f15b574f5da6516dcff";
export const url=new URL("../icons/video_camera_front_off-fill.svg?v=bdfdca4b83ba9c9a32e8e201ed061570103cd68136ca7550970724a0a368558c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
