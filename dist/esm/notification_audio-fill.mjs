export const name="notification_audio-fill";
export const id="dl_172489557a42e965f953";
export const url=new URL("../icons/notification_audio-fill.svg?v=a3331d1310636b4bb76a66746efb9bb6be3d6a225a1f92523c3cd0f55d0a081c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
