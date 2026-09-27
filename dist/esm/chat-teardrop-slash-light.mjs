export const name="chat-teardrop-slash-light";
export const id="dl_a56c4b2bb12243e4afab";
export const url=new URL("../icons/chat-teardrop-slash-light.svg?v=0f2a2de78cd00907cf14127d49501eb6ecd448567d9571ccc9e7d34639bcf98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
