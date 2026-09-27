export const name="chat_info";
export const id="dl_442f68108ff28f9f9df4";
export const url=new URL("../icons/chat_info.svg?v=cb4fa0afc4a74db67840e74430b730386d1c44832eb07c1359f6e5c1baea122c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
