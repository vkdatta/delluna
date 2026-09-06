export const name="chat-dots-duotone";
export const id="dl_2c420bd460724ed39ad7";
export const url=new URL("../icons/chat-dots-duotone.svg?v=12ed362dd205ef7a16a96a88d92270887ce96aca961c609b457383e0e3074756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
