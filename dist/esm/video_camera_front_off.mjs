export const name="video_camera_front_off";
export const id="dl_a820d4ff177b5d871dbe";
export const url=new URL("../icons/video_camera_front_off.svg?v=972a51d9c908aff7d176a164c692fe1c9fd60ca3c359445138b753a5d65f2837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
