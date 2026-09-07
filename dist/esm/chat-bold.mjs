export const name="chat-bold";
export const id="dl_e5764a0e6eb6491d9598";
export const url=new URL("../icons/chat-bold.svg?v=0b4aede2e1174d93ca5f6d03ecb95f94af8dfb7f7e363866e4046bf25d08f3c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
