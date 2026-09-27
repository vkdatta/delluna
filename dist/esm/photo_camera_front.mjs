export const name="photo_camera_front";
export const id="dl_b8e2ffbf7a0b9090f0b0";
export const url=new URL("../icons/photo_camera_front.svg?v=0458cbbe6ae6371b5b9fddd33d36522e79fef17e483b341b8e70dfbdc09113e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
