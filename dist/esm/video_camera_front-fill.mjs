export const name="video_camera_front-fill";
export const id="dl_8de32ed0206348592c36";
export const url=new URL("../icons/video_camera_front-fill.svg?v=8c7ba9cdf36f11cc712a10c59c904fe3ad91bf7b09ccf7262be73a923d67b387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
