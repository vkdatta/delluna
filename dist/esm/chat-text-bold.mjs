export const name="chat-text-bold";
export const id="dl_b7f780f1294340c39b1f";
export const url=new URL("../icons/chat-text-bold.svg?v=88f6af7b6ae3bdcf108d97d60e344b281c58b7280e0cabd219063bd1a1801408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
