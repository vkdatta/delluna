export const name="chat-circle-dots-bold";
export const id="dl_379a2be8fc6e4a1881de";
export const url=new URL("../icons/chat-circle-dots-bold.svg?v=5453d145c59e0b0f04849de3c11cd6e48c7113dedda2c881038944bd55896aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
