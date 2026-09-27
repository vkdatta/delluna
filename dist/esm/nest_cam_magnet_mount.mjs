export const name="nest_cam_magnet_mount";
export const id="dl_cdde607d3b6ca6bf6095";
export const url=new URL("../icons/nest_cam_magnet_mount.svg?v=60f67787a2ef911beee0a1c09fc71e87661b5d63f7f81c21d1d0b26318696a02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
