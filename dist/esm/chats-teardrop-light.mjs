export const name="chats-teardrop-light";
export const id="dl_01ec7826881f4081a257";
export const url=new URL("../icons/chats-teardrop-light.svg?v=eb4420787eafa0658de49c61694fa391d93841574b0334e8acdb7a413901ff80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
