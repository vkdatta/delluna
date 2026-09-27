export const name="video_frame_copy-fill";
export const id="dl_e6ef54847ac187ee5f4b";
export const url=new URL("../icons/video_frame_copy-fill.svg?v=ce253cf93503ae7fe3d1284b787dc9df2910d6e691eb5c7d904cb3e51d49e8e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
