export const name="chats-bold";
export const id="dl_18cfd5d1bd3c4acf831a";
export const url=new URL("../icons/chats-bold.svg?v=a04b702e11f9cf3a424196cfbd3a4134f7832b50c41853d638eb8b454c8396e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
