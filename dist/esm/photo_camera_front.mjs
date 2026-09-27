export const name="photo_camera_front";
export const id="dl_a0930e5f601925ef6770";
export const url=new URL("../icons/photo_camera_front.svg?v=3d09c8acc8e8679697adf2fd036e67accfde226ef70d3a94d799552ea9ad53c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
