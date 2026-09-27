export const name="chat-dots-bold";
export const id="dl_47b8904197804dddba4a";
export const url=new URL("../icons/chat-dots-bold.svg?v=92855fdfe6c93528c9d8f4a8e8dca3dd881a18b1a696aa18fc962cd5e9fce5ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
