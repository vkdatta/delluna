export const name="mark_unread_chat_alt-fill";
export const id="dl_3fb8734a97b340d299b9";
export const url=new URL("../icons/M/mark_unread_chat_alt-fill.svg?v=5d9ecf28b0fd089363b04486ee91524ae8a509e8125934ed3f795f97badd5ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
