export const name="chats-teardrop-fill";
export const id="dl_e1612859c0a94c45a95a";
export const url=new URL("../icons/chats-teardrop-fill.svg?v=8c82c2fad80b029ce9856c4d898e654707b4de29601190d6c584d55e8013d5ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
