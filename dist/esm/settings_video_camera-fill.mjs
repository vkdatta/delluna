export const name="settings_video_camera-fill";
export const id="dl_1efba93cbd4a440680eb";
export const url=new URL("../icons/settings_video_camera-fill.svg?v=fc55bcc1d189974e0e5e86f80a8a634a79d74cf3dc9d43e00ac318055b5fd6a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
