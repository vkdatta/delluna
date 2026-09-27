export const name="video_camera_front";
export const id="dl_e1b62f4ab4719c98173b";
export const url=new URL("../icons/video_camera_front.svg?v=56cf26cf53bed3fcf82e37860f7c71bc7c5cb1515f8514904a9675bec7a25fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
