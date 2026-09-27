export const name="mark_unread_chat_alt";
export const id="dl_d898951ef8af7f19a9a9";
export const url=new URL("../icons/mark_unread_chat_alt.svg?v=7b577d2084660ce41810c5994a54db52ce2930180fdb57050f8124b802b4f9d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
