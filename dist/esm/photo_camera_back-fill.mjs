export const name="photo_camera_back-fill";
export const id="dl_2973e44edfa8072cee33";
export const url=new URL("../icons/photo_camera_back-fill.svg?v=639c57f1d0302b15356203b019ddcda1036d291750556eabfbee5876ecb9765e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
