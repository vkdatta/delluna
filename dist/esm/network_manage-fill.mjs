export const name="network_manage-fill";
export const id="dl_c73c09183f6dd57c9097";
export const url=new URL("../icons/network_manage-fill.svg?v=73fbc9679592a82a3194594cc61ecc736c44193d5354d0d815545572c16dc34a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
