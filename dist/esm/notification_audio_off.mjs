export const name="notification_audio_off";
export const id="dl_1695c11f0c92875f4f9a";
export const url=new URL("../icons/notification_audio_off.svg?v=1ae5a92518cdfa10962ac5e20d5d64e922a633628ea9b8bc4f783f29fa7013b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
