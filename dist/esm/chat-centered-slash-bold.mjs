export const name="chat-centered-slash-bold";
export const id="dl_0a182617461d48a0aa81";
export const url=new URL("../icons/chat-centered-slash-bold.svg?v=8a75cdc543d8d86e47cc4a160b4b9c1f3770f39c004ad74b8b43b0fabc49fb63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
