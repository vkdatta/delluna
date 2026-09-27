export const name="chat-centered-text-fill";
export const id="dl_3e0bda94f4aa48a4887a";
export const url=new URL("../icons/chat-centered-text-fill.svg?v=bb9b914325939b3c792d86c752fa1dd7b1daca32bf9283d5e7bcc89a0df85a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
