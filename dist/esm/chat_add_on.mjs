export const name="chat_add_on";
export const id="dl_2e7857e6a1fe45e5f6dc";
export const url=new URL("../icons/chat_add_on.svg?v=57e11c10f25461f9d7ac38a9eeb515dcfa5ff2e05514a90435817b263c80e3f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
