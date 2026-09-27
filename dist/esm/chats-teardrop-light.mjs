export const name="chats-teardrop-light";
export const id="dl_01ec7826881f4081a257";
export const url=new URL("../icons/chats-teardrop-light.svg?v=5f9a9811cba3b510beb35737db05b7c413b2aa4715ccec6cb22aba3b5f845901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
