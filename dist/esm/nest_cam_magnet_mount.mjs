export const name="nest_cam_magnet_mount";
export const id="dl_8aa814933c82decc38f9";
export const url=new URL("../icons/nest_cam_magnet_mount.svg?v=1ae4b8368553b1fbbd1d1fbf424a6ba7bee42d0e5407a9a2d1f56d8310b13933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
