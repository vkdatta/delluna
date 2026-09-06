export const name="chats-circle";
export const id="dl_6e57a63200d74c8292ea";
export const url=new URL("../icons/chats-circle.svg?v=672fea51548c727b020bf6532d2e350fb0189c8fe36725f2127530f11868a8ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
