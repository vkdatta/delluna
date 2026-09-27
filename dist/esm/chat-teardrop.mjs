export const name="chat-teardrop";
export const id="dl_ac7f71ebf92940f2810e";
export const url=new URL("../icons/chat-teardrop.svg?v=def602c8b734993bf321ac0658f8e246e80b60642a1f4d93f7b501a1c2afea73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
