export const name="photo_frame";
export const id="dl_4757e6f3d73cb98f4d21";
export const url=new URL("../icons/photo_frame.svg?v=173adf6a414e507a9184c702e3711ef65ff65070d3e7a56bd375621f4291f98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
