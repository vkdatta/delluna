export const name="chat-duotone";
export const id="dl_40182ebe08664ca09c72";
export const url=new URL("../icons/chat-duotone.svg?v=07c33786e065c3f15dbdda9b640a9b43490b2cb10c6f8be70495ec0ba3f45444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
