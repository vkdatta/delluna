export const name="chat-teardrop-dots-light";
export const id="dl_3a2ee6648f7e49eaac82";
export const url=new URL("../icons/chat-teardrop-dots-light.svg?v=7ecb512f5099be1204c1546a35d3448c2901ba08d54454bb016f22d19254e737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
