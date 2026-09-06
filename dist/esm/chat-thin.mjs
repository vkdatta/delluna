export const name="chat-thin";
export const id="dl_60e6b06de8eb45bda498";
export const url=new URL("../icons/chat-thin.svg?v=c51a76b24165c6a1bd3c157951edc4e4665bfd8982a23d682b5cb82c2b5a6fa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
