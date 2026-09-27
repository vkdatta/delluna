export const name="settings_photo_camera-fill";
export const id="dl_e14e4498f6b33f398f67";
export const url=new URL("../icons/settings_photo_camera-fill.svg?v=5c6782bcdd59981a80242403a66d163ec368ad7ff81c686dda772ad0c78dba15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
