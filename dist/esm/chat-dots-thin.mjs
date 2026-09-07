export const name="chat-dots-thin";
export const id="dl_0a2a3426e2c9443bb134";
export const url=new URL("../icons/chat-dots-thin.svg?v=50f6b17e27732412330f87d694d8d1a9457ca73d749db770fc22ee42d589edbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
