export const name="ticket";
export const id="dl_b0d891950555494989d4";
export const url=new URL("../icons/T/ticket.svg?v=1e168a9edcbdda845cbc2a9a1eb5dfa1499bf7974351750e81ea142ecdde7335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
