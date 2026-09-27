export const name="mark_chat_read-fill";
export const id="dl_c7449676061a1c4096d1";
export const url=new URL("../icons/mark_chat_read-fill.svg?v=d7fd2716d55bcb6b30e373742975316f6e667bde0750d65e83df9ff83ace5f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
