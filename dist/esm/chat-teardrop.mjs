export const name="chat-teardrop";
export const id="dl_ac7f71ebf92940f2810e";
export const url=new URL("../icons/chat-teardrop.svg?v=1091d2a7f9aeb8751e8d1fdcce42e44bdbe4c975c9206be74da8068048795bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
