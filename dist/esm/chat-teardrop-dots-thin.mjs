export const name="chat-teardrop-dots-thin";
export const id="dl_2002a9bb3fa94956af29";
export const url=new URL("../icons/chat-teardrop-dots-thin.svg?v=687fc2b4b2e68f6d659bc1150b1943058e761c98b34460eb4bdca584ff2e08cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
