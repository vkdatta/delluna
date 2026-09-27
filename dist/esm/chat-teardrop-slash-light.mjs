export const name="chat-teardrop-slash-light";
export const id="dl_a56c4b2bb12243e4afab";
export const url=new URL("../icons/chat-teardrop-slash-light.svg?v=6d61a07298198896e6c5dba94e153df17be1a08305049434d5ef3eaef3bc1ba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
