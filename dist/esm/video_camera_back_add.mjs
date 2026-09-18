export const name="video_camera_back_add";
export const id="dl_1a62bafd0c0a44bda23b";
export const url=new URL("../icons/video_camera_back_add.svg?v=92e34d483e8469fa5a71a2073ad7bb07ea07748c040dfde7da2f3fb14d1f6b21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
