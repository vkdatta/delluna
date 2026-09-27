export const name="mark_chat_unread-fill";
export const id="dl_55c91ecd2b063867e860";
export const url=new URL("../icons/mark_chat_unread-fill.svg?v=c46271f40107b39ff4d8926d45ad6f1cbf1b9984045678f6e0cb81703b5c8992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
