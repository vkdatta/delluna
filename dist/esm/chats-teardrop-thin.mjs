export const name="chats-teardrop-thin";
export const id="dl_52b83839d25d426aba74";
export const url=new URL("../icons/chats-teardrop-thin.svg?v=b7d4879e586fa104954cfe35b3a03c7cb9d5a037534e56475dd8ea2b3d8adb95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
