export const name="chat-duotone";
export const id="dl_40182ebe08664ca09c72";
export const url=new URL("../icons/chat-duotone.svg?v=d36a1c5f199f45699bf9469098a0a78f036f829962a7709642bde40de3b1beb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
