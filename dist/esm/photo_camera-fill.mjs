export const name="photo_camera-fill";
export const id="dl_8747cc8b03d3921200ea";
export const url=new URL("../icons/photo_camera-fill.svg?v=72fbbb833a2f47e4b3110656aab6f85a7970581d238bfdef0908c3f628cb1036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
