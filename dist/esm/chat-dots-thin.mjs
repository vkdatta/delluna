export const name="chat-dots-thin";
export const id="dl_0a2a3426e2c9443bb134";
export const url=new URL("../icons/chat-dots-thin.svg?v=429d82a1562a68fb9695ba12e2fefb4a99173740996aeab53e5f7fb63f9707aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
