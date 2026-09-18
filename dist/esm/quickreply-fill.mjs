export const name="quickreply-fill";
export const id="dl_f8a2247f9a7d40c38908";
export const url=new URL("../icons/quickreply-fill.svg?v=5f7ca83ba38389328bfce6417969d072244698a649e1fe0dbd7646aa475095f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
