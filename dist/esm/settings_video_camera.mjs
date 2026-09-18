export const name="settings_video_camera";
export const id="dl_48adf16be0984231aeb4";
export const url=new URL("../icons/S/settings_video_camera.svg?v=3d1c310ea0d8ec89003aabde3bc606e7d36fa72bc25855d96298e69f4603e47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
