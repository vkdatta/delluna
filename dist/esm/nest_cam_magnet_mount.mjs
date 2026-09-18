export const name="nest_cam_magnet_mount";
export const id="dl_c9b90f19c36240968a5d";
export const url=new URL("../icons/nest_cam_magnet_mount.svg?v=24c8b0f4539cc311cd388f3ffb21b01003e8539f0931f3d0a2f7150b21b4575d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
