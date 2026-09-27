export const name="notification_audio_off-fill";
export const id="dl_1e4806a81c5e4c870c01";
export const url=new URL("../icons/notification_audio_off-fill.svg?v=7c4a7c6682f92c5e7ec799e948053d5890b75812c7fdb1482548af852617abad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
