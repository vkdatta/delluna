export const name="chat-teardrop-dots-fill";
export const id="dl_66a7a7f7a7c344119b0b";
export const url=new URL("../icons/chat-teardrop-dots-fill.svg?v=069dccb2fde36c0fccf384954650cbcccc5412ec9fc6beb22601df0e560360f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
