export const name="tablet_camera";
export const id="dl_8b8ca67e297a9334217f";
export const url=new URL("../icons/tablet_camera.svg?v=b2cf37e30dbddefe4aebcad49b3f33d8dc2156f0cdb09e5d9d33b2f007ce6940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
