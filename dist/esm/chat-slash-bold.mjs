export const name="chat-slash-bold";
export const id="dl_e3401f3fb96a4b759231";
export const url=new URL("../icons/chat-slash-bold.svg?v=35ec5dc2f14abd5691323f701d7d88770323908ea044798e1dc3d68da0f5ec87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
