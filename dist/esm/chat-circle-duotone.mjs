export const name="chat-circle-duotone";
export const id="dl_3a646999ae6b46e4ab6c";
export const url=new URL("../icons/chat-circle-duotone.svg?v=5cb4bdab26d5f9474d323178a80c6073dbf149ff964c5a889fd859f96631f30c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
