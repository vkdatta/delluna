export const name="nest_cam_magnet_mount-fill";
export const id="dl_df2fe95992765544635a";
export const url=new URL("../icons/nest_cam_magnet_mount-fill.svg?v=14c55da01c1718a4f885a19f8c2e1eaa30cbd0a682d229e669af7fe2eb80746d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
