export const name="chat-teardrop-fill";
export const id="dl_d3285911fb114cdbb893";
export const url=new URL("../icons/chat-teardrop-fill.svg?v=a5a1585c14face030d97f4278ba97a7bcdcb178aa7c4b0366693c08b906b45cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
