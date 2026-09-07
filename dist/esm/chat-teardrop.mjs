export const name="chat-teardrop";
export const id="dl_ac7f71ebf92940f2810e";
export const url=new URL("../icons/chat-teardrop.svg?v=ed3478322af3b860af6e00916aaf572d2eca2318555c42c656de6528396d8f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
