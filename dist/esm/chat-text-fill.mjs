export const name="chat-text-fill";
export const id="dl_5d96d2ca82df4e288332";
export const url=new URL("../icons/chat-text-fill.svg?v=22086e5c2219085c9a89dee18a72f0d61da1d9e9fcf4456d56234c46f521717b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
