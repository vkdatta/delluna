export const name="nest_cam_wall_mount";
export const id="dl_8a858f56c493a17cdbde";
export const url=new URL("../icons/nest_cam_wall_mount.svg?v=ba4a49ae2eaec97916812006c434df76233a2448fb6741c0d68e9a33457c794c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
