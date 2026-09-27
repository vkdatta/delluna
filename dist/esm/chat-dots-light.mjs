export const name="chat-dots-light";
export const id="dl_940f68abdeac4aaabc39";
export const url=new URL("../icons/chat-dots-light.svg?v=44ed007130fb1133190b553d3db8a0043bbe3491a0fa0a38222fbf0d64b15ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
