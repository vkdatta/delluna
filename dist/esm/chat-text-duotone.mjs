export const name="chat-text-duotone";
export const id="dl_939dba10376c4e20a0fc";
export const url=new URL("../icons/chat-text-duotone.svg?v=d4d7b8e201033d5730b90d0ec759a534d2c2cf2e42eb2b28b997acd64eee449d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
