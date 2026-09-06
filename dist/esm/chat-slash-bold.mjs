export const name="chat-slash-bold";
export const id="dl_e3401f3fb96a4b759231";
export const url=new URL("../icons/chat-slash-bold.svg?v=53e3456c365e73a33b8c56830f1035940373a4fb13dcb228f0e4473f950f6481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
