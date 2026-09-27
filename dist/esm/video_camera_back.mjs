export const name="video_camera_back";
export const id="dl_46904713fa6a51e7f890";
export const url=new URL("../icons/video_camera_back.svg?v=d49beae152fb595b7e88e5b6c42d7bfa2a9e7956d08c053ee1ee774fecce2aed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
