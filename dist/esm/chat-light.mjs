export const name="chat-light";
export const id="dl_d898a3ad314b45abb6dd";
export const url=new URL("../icons/chat-light.svg?v=1e46c795ad129ef08ecb417ac425802db86cf66307f1a037877fd625d672ffea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
