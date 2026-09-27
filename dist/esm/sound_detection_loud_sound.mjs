export const name="sound_detection_loud_sound";
export const id="dl_3739120ae002eed28605";
export const url=new URL("../icons/sound_detection_loud_sound.svg?v=a863354777c6b9bf3613897104094b64fd65979e7f48fd2f7abc5d161829439d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
