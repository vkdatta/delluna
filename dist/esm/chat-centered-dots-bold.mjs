export const name="chat-centered-dots-bold";
export const id="dl_19df8c866b4641338434";
export const url=new URL("../icons/chat-centered-dots-bold.svg?v=a55b2e7ed845e2aa663019da8eacf92720340df8bb1a51448b6124106038eb59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
