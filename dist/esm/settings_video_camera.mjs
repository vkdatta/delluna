export const name="settings_video_camera";
export const id="dl_5c911bf77a1f3c753725";
export const url=new URL("../icons/settings_video_camera.svg?v=b47241aaa9f93ab4bfde3ec8c46f1b124d45f0eda3411a0bed23687012198d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
