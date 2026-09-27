export const name="screenshot_frame_2-fill";
export const id="dl_6ad1dfb887ebeba25404";
export const url=new URL("../icons/screenshot_frame_2-fill.svg?v=912f3d87c874255dda27c9b4cf19efb8e653c3415f1eae70bf860693ae4843f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
