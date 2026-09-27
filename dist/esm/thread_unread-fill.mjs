export const name="thread_unread-fill";
export const id="dl_e9179d36693b346bf56f";
export const url=new URL("../icons/thread_unread-fill.svg?v=d8eee4d8e0bff4ed27e42a707f0af7b15c0fc2a9472242b3031b5648645f6513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
