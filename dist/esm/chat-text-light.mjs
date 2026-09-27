export const name="chat-text-light";
export const id="dl_a0fe5206979a4844be49";
export const url=new URL("../icons/chat-text-light.svg?v=3ef075655e8bc383590ab98f49081b2ae3a378b5688901265537a36a9bfa7b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
