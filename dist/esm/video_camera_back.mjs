export const name="video_camera_back";
export const id="dl_48985c24304946b87413";
export const url=new URL("../icons/video_camera_back.svg?v=36b3b67873a4dc18aeb7aa849850f509defe650a5899104dc358096e02297082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
