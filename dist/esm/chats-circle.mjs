export const name="chats-circle";
export const id="dl_6e57a63200d74c8292ea";
export const url=new URL("../icons/chats-circle.svg?v=61b9545087b07f12bd3be3940a570512adab53bdcc8eb777958b68b8a6c83078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
