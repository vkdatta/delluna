export const name="chat_add_on";
export const id="dl_48843c2b22506e5b9c46";
export const url=new URL("../icons/chat_add_on.svg?v=9c078d5f7fd35a90e1a2135e7e5f53fa89618e7be1c7e4f23fce30bf67bf23e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
