export const name="video_camera_back_add-fill";
export const id="dl_15570e239f95c1faba4a";
export const url=new URL("../icons/video_camera_back_add-fill.svg?v=da762a594472f8b4adc43a77ad87c21262bafc310cb0920db6c1f392674f58ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
