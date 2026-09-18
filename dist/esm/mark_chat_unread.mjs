export const name="mark_chat_unread";
export const id="dl_315d017c265d4595ab63";
export const url=new URL("../icons/M/mark_chat_unread.svg?v=8503b59fbf018ebe7c6f930d8f000169a2f1b307863310b4dd2270d566b60fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
