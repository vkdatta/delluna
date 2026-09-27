export const name="mark_chat_unread";
export const id="dl_41478e853097e31d0629";
export const url=new URL("../icons/mark_chat_unread.svg?v=aecd533038f7a5c0d42593c01affe87d399c79ae35bcdd0e8f67fed7277cb8ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
