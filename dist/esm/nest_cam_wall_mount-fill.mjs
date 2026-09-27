export const name="nest_cam_wall_mount-fill";
export const id="dl_d4991c9ab15f0051ac16";
export const url=new URL("../icons/nest_cam_wall_mount-fill.svg?v=2294c8095115012daa7e2d5aa30844a39c2fa66a0a070dc08fc1d7a8d28d836a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
