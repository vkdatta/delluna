export const name="notification_sound-fill";
export const id="dl_b30ea24fd4e92e70d8ba";
export const url=new URL("../icons/notification_sound-fill.svg?v=9b8a3073e9ab8b3ccc785c1b3551d616ab1bafa6a5b74821ceb2a58b60b3a6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
