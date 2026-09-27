export const name="settings_video_camera";
export const id="dl_6d933038ee60cef8788f";
export const url=new URL("../icons/settings_video_camera.svg?v=6889f991a5aee1d4c2b077affdb9d48275f3f4e4544a6f9897b7af2c61011faf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
