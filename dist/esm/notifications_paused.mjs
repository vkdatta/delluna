export const name="notifications_paused";
export const id="dl_4246cf43ad7940e3941d";
export const url=new URL("../icons/N/notifications_paused.svg?v=4a7f29e7d17113d02ae2f13a692d9efa1296dfbca81f32c88a20386de8250ad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
