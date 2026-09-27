export const name="nest_cam_wall_mount";
export const id="dl_50fdf107b97c24b95dc4";
export const url=new URL("../icons/nest_cam_wall_mount.svg?v=5b3f2a18c9ed88fa897ba47d9fcba1c242d79872ae18d9c0043b81601db80e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
