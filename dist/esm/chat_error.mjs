export const name="chat_error";
export const id="dl_6606557ee10291676327";
export const url=new URL("../icons/chat_error.svg?v=00d87dee7445280039ae23b3efb861db04486e50b421c8bb54b280f81352dba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
