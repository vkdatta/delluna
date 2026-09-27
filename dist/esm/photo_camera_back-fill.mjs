export const name="photo_camera_back-fill";
export const id="dl_e3acae09f63f77fe3793";
export const url=new URL("../icons/photo_camera_back-fill.svg?v=c787350a41dcc159c1bdbe1ae7104d054cc45595c31bca9a10393aff714149c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
