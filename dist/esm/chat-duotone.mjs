export const name="chat-duotone";
export const id="dl_40182ebe08664ca09c72";
export const url=new URL("../icons/chat-duotone.svg?v=da9c4c250c712edbb90fa9a228ee76c6c5a9c496daab23da3dcfc30140c619ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
