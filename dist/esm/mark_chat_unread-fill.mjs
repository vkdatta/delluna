export const name="mark_chat_unread-fill";
export const id="dl_e72e7f95341d3f169779";
export const url=new URL("../icons/mark_chat_unread-fill.svg?v=7d919075b2de8a54fb6950be5dc7a5d9e68e82f140b9edb0f0521df5130bc316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
