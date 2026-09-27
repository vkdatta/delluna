export const name="chat-teardrop-dots-bold";
export const id="dl_d4e10990ee034ae49fad";
export const url=new URL("../icons/chat-teardrop-dots-bold.svg?v=ba92c2166da6d5921f38bcbb4b6260674eb85b5160db6966d2f3b306fda2719a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
