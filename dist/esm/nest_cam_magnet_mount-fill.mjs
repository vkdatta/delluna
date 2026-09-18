export const name="nest_cam_magnet_mount-fill";
export const id="dl_47e61d28b44b436baeba";
export const url=new URL("../icons/nest_cam_magnet_mount-fill.svg?v=e5901e5eab690c956f4935eade7de2d5aee296438ec9aefffd14c9da64e3d127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
