export const name="mark_chat_read-fill";
export const id="dl_fb23b8ad55784839a95a";
export const url=new URL("../icons/mark_chat_read-fill.svg?v=bfeb74f86b3ca96e2c08c5ed5423ff5d089f12c8e2716329c6f32f6cd2867d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
