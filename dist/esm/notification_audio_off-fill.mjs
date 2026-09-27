export const name="notification_audio_off-fill";
export const id="dl_5a5827c071463305101b";
export const url=new URL("../icons/notification_audio_off-fill.svg?v=df7830d97c9dad6256a785e60f73235dbff1fa0aac1124fe917adb6e3e1ca277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
