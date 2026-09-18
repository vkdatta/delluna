export const name="tab_inactive-fill";
export const id="dl_6cde9d6d95cb45f780ac";
export const url=new URL("../icons/T/tab_inactive-fill.svg?v=fe071eb960b4a0a82aabe9b38b281674a9bfd6232f2a314bd41c9a01cba3658b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
