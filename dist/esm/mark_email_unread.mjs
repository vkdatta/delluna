export const name="mark_email_unread";
export const id="dl_03e0676edf924a60110b";
export const url=new URL("../icons/mark_email_unread.svg?v=62924ae3d68e31b0e4c4810c5d8db2ca8ce8e0a2656c5c468958b60256f50241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
