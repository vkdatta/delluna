export const name="mark_unread_chat_alt";
export const id="dl_2b506c66bb3c3fca9352";
export const url=new URL("../icons/mark_unread_chat_alt.svg?v=027615b10bce6676d8b2022ef35f22a830fa60d05f36ace797375caae48925c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
