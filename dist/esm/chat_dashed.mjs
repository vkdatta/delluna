export const name="chat_dashed";
export const id="dl_3c71cd365295a932ef41";
export const url=new URL("../icons/chat_dashed.svg?v=565d1254a2cb044c800e2f7ea8c064a70d7b78c342030132ca2dc8442023870f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
