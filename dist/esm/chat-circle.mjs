export const name="chat-circle";
export const id="dl_14943cd1570143c69c64";
export const url=new URL("../icons/chat-circle.svg?v=755f5bebb82f6d274bca2c2d24e793b1ab56b228be48fcfecdcbc960895ae872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
