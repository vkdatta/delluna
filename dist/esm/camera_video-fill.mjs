export const name="camera_video-fill";
export const id="dl_39decfd3eaf12fb9e9f5";
export const url=new URL("../icons/camera_video-fill.svg?v=4a9ab4eaf50f775ddf28e55268fa888c14e75d9fa3b837e4822c58540def5df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
