export const name="chat-circle-dots-light";
export const id="dl_d3955ff194b046d78bea";
export const url=new URL("../icons/chat-circle-dots-light.svg?v=8d01945dba8e48bfeb69cdd5d039f071b2b409f863afb735302176688a3c2636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
