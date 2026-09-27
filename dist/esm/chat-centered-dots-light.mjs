export const name="chat-centered-dots-light";
export const id="dl_c42a1ae87ce14289a70b";
export const url=new URL("../icons/chat-centered-dots-light.svg?v=79edfdea6552dd624f2e30b3c56a7dc88450d6c63e2ec6707934bdb1a1e74a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
