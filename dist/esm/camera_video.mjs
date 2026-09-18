export const name="camera_video";
export const id="dl_de7dd8d5f2cc41d6ae28";
export const url=new URL("../icons/camera_video.svg?v=fd8221b57e3170742631ef34399731dd3dcf571cf46d10979a762fc9cf92b494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
