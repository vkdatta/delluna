export const name="chat-centered-slash";
export const id="dl_42ef453233cf4de19c40";
export const url=new URL("../icons/chat-centered-slash.svg?v=fda0dafffb75d7f8fbd82e3aaaf03fdad936532cd7cd440e1ca57b19658a8bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
