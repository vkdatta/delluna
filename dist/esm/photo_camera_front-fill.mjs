export const name="photo_camera_front-fill";
export const id="dl_fa6fb597c79207ccec3d";
export const url=new URL("../icons/photo_camera_front-fill.svg?v=3bc18c06675b29c41b3a282e2231982d27a5f40ca4ddc33194e7800c14997597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
