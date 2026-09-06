export const name="chat-teardrop-dots-bold";
export const id="dl_d4e10990ee034ae49fad";
export const url=new URL("../icons/chat-teardrop-dots-bold.svg?v=9a180481507f519fba62b46f0295d66375829cfa613083341469179f3153c6e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
