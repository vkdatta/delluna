export const name="notification_audio_off-fill";
export const id="dl_d462bbf195794a26b000";
export const url=new URL("../icons/notification_audio_off-fill.svg?v=5c91b61b698b7945cd5275377bf1c20683302305befe4c793f80e8889abd3520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
