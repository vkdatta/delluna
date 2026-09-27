export const name="stack-overflow-logo-duotone";
export const id="dl_6d64f02f19c5c3adf64b";
export const url=new URL("../icons/stack-overflow-logo-duotone.svg?v=dd4ee75ad48c31210ce3393b04b79e15a28fa1cdbbbe23e0cde05bf71cb8f5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
