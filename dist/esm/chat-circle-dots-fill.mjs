export const name="chat-circle-dots-fill";
export const id="dl_fbe98c637cc448918e52";
export const url=new URL("../icons/chat-circle-dots-fill.svg?v=943004b207c743d2b1b38c89726e12798d9f0a888fbb8babd19c2a2e193a99bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
