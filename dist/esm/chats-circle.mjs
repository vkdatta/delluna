export const name="chats-circle";
export const id="dl_6e57a63200d74c8292ea";
export const url=new URL("../icons/chats-circle.svg?v=831e74efb08b619630afb1cfe5b621f3779f6fd5a163aa8f5363d7611c0f03d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
