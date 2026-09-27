export const name="chat-dots-light";
export const id="dl_940f68abdeac4aaabc39";
export const url=new URL("../icons/chat-dots-light.svg?v=4145fe0330e59ca80522e6357f4bc71e51dc2d3946e66376c04a8728695d733a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
