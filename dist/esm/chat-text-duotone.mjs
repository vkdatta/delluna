export const name="chat-text-duotone";
export const id="dl_939dba10376c4e20a0fc";
export const url=new URL("../icons/chat-text-duotone.svg?v=dacbeff970881a708a0078a3a5a767b6366d6bde5d69cdd6bfed89112979cd60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
