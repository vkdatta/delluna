export const name="nest_cam_wall_mount-fill";
export const id="dl_c0690c4fe7fad0cae12f";
export const url=new URL("../icons/nest_cam_wall_mount-fill.svg?v=5ede1f518cb98209dcc76797c49d5e314fa02b4ef4a57853b96f156e4caa85ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
