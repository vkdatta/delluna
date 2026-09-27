export const name="support_agent-fill";
export const id="dl_5389ef14a2a6e341504e";
export const url=new URL("../icons/support_agent-fill.svg?v=dcf7cb1d72ae38dce38cc90dfb195153948883ca41093c00e8d92f3627a6e867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
