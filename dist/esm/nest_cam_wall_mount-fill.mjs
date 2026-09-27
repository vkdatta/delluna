export const name="nest_cam_wall_mount-fill";
export const id="dl_7d32c82e30082cc8babf";
export const url=new URL("../icons/nest_cam_wall_mount-fill.svg?v=b9ee379dafd840bc287ab10e2db81ef9dcd320ac65bc50bd795df8287df27e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
