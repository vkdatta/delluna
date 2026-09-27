export const name="mark_chat_unread";
export const id="dl_2921af805bc0106f3d90";
export const url=new URL("../icons/mark_chat_unread.svg?v=2185a4997b32298796a6a60e9064d05366b7af407e0f3e34e4d5828077ffc3ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
