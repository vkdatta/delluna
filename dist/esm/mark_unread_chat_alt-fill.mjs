export const name="mark_unread_chat_alt-fill";
export const id="dl_24bc1a09532cf51e42d1";
export const url=new URL("../icons/mark_unread_chat_alt-fill.svg?v=41cd7d562035d26d11fad04f73bdd35826e471bd2e2a4eb98190e64a0c0b9ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
