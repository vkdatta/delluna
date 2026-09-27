export const name="brandy-fill";
export const id="dl_6aac5ae5042b4f5fbf4d";
export const url=new URL("../icons/brandy-fill.svg?v=9154cabeea5bc2393f0851eaa5de403cca3298c488b26ba5fc3183e373bf6c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
