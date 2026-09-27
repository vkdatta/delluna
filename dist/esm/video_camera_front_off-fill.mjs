export const name="video_camera_front_off-fill";
export const id="dl_a716297681dc334fd184";
export const url=new URL("../icons/video_camera_front_off-fill.svg?v=20d89cbb1a47a73b4fc7baf5d7d4c12a6fa4abe4b296e696b71838b53482ea50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
