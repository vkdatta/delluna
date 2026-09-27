export const name="mark_unread_chat_alt-fill";
export const id="dl_6c8702e9b43568c12de5";
export const url=new URL("../icons/mark_unread_chat_alt-fill.svg?v=5036c0d26bae372ed51d374d41c32367f66fb0fda05c2db32629a27f18ea07eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
