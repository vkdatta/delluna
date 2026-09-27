export const name="group_work";
export const id="dl_a45927a6fde03ba3bcfc";
export const url=new URL("../icons/group_work.svg?v=53f6bb56e67a6e0e3a949f412369e726a2920fadd30dade5a9421476b27a38aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
