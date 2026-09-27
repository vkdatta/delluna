export const name="support_agent-fill";
export const id="dl_f2ebdaae376f7cd4ae33";
export const url=new URL("../icons/support_agent-fill.svg?v=ffb605bd4ef1f5e206b7394ce95ce566f305b9742cad65957606550a9d92d60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
