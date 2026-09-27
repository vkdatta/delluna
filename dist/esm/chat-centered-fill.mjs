export const name="chat-centered-fill";
export const id="dl_e5e9e023997a47d28964";
export const url=new URL("../icons/chat-centered-fill.svg?v=367dd3be64ae601a504d0196ebaeb3102b6b1c3b280df14af9c55925bdc90230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
