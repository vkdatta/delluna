export const name="chat-teardrop-dots-fill";
export const id="dl_66a7a7f7a7c344119b0b";
export const url=new URL("../icons/chat-teardrop-dots-fill.svg?v=f46d5bb287f8b8a0a6b737f624c51da6c9b7882091c6a81406e646d38a90b4cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
