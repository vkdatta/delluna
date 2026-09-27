export const name="call_log-fill";
export const id="dl_ea042fe593f8e0dc9b86";
export const url=new URL("../icons/call_log-fill.svg?v=689dc5328dfad8681c08cd53aeac2bff6e9f6b8e3e17011cd3efb65c0e586a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
