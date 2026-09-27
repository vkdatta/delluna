export const name="mark_chat_unread";
export const id="dl_e2a49b0b4843753a7bd1";
export const url=new URL("../icons/mark_chat_unread.svg?v=eed10b1c8633dcf7f0ba7335ad992d4cb45a36044239114c4e6da4e3f6e2a596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
