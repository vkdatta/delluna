export const name="chats-circle-bold";
export const id="dl_5c238479f6c5468bb53d";
export const url=new URL("../icons/chats-circle-bold.svg?v=521e6491661235f35cbad8359f503e87fbf474998f62972f58eb663269c87b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
