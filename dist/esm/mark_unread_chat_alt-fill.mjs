export const name="mark_unread_chat_alt-fill";
export const id="dl_489aff54e2e6179921a5";
export const url=new URL("../icons/mark_unread_chat_alt-fill.svg?v=f74a1b2e0f6a759f684fb229409a347252a12297334a564a722317b2818d8269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
