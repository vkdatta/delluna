export const name="chat-centered";
export const id="dl_cbd0a7ac5d2a4168b828";
export const url=new URL("../icons/chat-centered.svg?v=5769f556269dc78f2ad38810daeb36a27b8584c36dd29d494865fde7cff0a1a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
