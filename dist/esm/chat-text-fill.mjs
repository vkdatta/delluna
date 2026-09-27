export const name="chat-text-fill";
export const id="dl_5d96d2ca82df4e288332";
export const url=new URL("../icons/chat-text-fill.svg?v=5a500fd232bcd6906d01135b8cce06ea39887a84f12cdbf788079b4e2812924b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
