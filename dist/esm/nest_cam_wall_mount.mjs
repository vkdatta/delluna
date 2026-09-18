export const name="nest_cam_wall_mount";
export const id="dl_49d10053619e4a6e9d95";
export const url=new URL("../icons/nest_cam_wall_mount.svg?v=d06ae6e0edd0411737c6150735e220fb6083499b2444b927a1f7f8d7796703b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
