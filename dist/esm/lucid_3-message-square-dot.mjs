export const name="lucid_3-message-square-dot";
export const id="dl_fed75f914e534a3b8521";
export const url=new URL("../icons/lucid_3-message-square-dot.svg?v=1ba0217c303ea80f6121371f26aced1b4011682fa58cb616c25396a86186a833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
