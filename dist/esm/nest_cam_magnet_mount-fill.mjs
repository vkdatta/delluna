export const name="nest_cam_magnet_mount-fill";
export const id="dl_b2250c534534a1d49d97";
export const url=new URL("../icons/nest_cam_magnet_mount-fill.svg?v=c6d886346119162d90fb040b08368e9557d7ec9db8ae9f591c99cbbb6e43135d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
