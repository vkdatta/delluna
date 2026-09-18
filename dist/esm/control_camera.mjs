export const name="control_camera";
export const id="dl_9b3aec4c7667477aa0fa";
export const url=new URL("../icons/control_camera.svg?v=1f97f0cb3bf18b984c7fa9ced5dadc3178f01061c1a9d92095708e2d03d2d529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
