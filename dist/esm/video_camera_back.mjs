export const name="video_camera_back";
export const id="dl_d57ce0135290bb9c1850";
export const url=new URL("../icons/video_camera_back.svg?v=da24ae5d8d81f031da0375f68f07a8007b1b089a5d5bb56be5486c0d1772c9dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
