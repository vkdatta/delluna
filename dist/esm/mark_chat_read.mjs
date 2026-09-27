export const name="mark_chat_read";
export const id="dl_adf985c688bc44ecd3e6";
export const url=new URL("../icons/mark_chat_read.svg?v=bc8af38f4d6e55dc301563ff10842508895a0366a24ff5e689041efcac0031f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
