export const name="mark_unread_chat_alt";
export const id="dl_a74d1aa4cf8126be5726";
export const url=new URL("../icons/mark_unread_chat_alt.svg?v=c212cb11ed31c70800caeb81aa44c05d7570c2d040b0b81f4f9a929e3f6f5f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
