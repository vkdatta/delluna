export const name="event-fill";
export const id="dl_6432441abb7c70552f4b";
export const url=new URL("../icons/event-fill.svg?v=46412d5fdbdb4bcb8e8af3b97da0063b3965ecb1b16f5b4632fe82f0171acdf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
