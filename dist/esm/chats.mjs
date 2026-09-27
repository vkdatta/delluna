export const name="chats";
export const id="dl_e0403547e73b42038a70";
export const url=new URL("../icons/chats.svg?v=a6d50b9f1911d3b687f646e89ddb65c814594fc22fbbf3041238d6259a27c991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
