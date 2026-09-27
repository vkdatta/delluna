export const name="settings_video_camera";
export const id="dl_f73dc7f6c8ed09314522";
export const url=new URL("../icons/settings_video_camera.svg?v=ad73daf2416086f7774bd66f399fe2ca8e20e00ad7afd88c700276d6496d8ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
