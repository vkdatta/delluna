export const name="mark_chat_unread-fill";
export const id="dl_a51aba53b68442819c04";
export const url=new URL("../icons/mark_chat_unread-fill.svg?v=083989966b20cdd4cfd8f1882a3a09a63545f1ec48d6fe34ced8451daa23a6f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
