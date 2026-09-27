export const name="chat-centered-dots-bold";
export const id="dl_19df8c866b4641338434";
export const url=new URL("../icons/chat-centered-dots-bold.svg?v=7e7c82097694d1b09796f7055b2d4a806be9875896d509f6c4afc7622bdf15cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
