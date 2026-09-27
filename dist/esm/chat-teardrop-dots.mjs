export const name="chat-teardrop-dots";
export const id="dl_6f520e0401274052b34a";
export const url=new URL("../icons/chat-teardrop-dots.svg?v=d86b3644034cbc61e5161f3b0a785c3f0fde97c800520d2b0b9c28d1b92cdad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
