export const name="mark_chat_read";
export const id="dl_fd4a2f7349b177a45655";
export const url=new URL("../icons/mark_chat_read.svg?v=3dd372bde91cced5b07db949e965d2ed1d2c4b9d23de11186c43e93c4dee602e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
