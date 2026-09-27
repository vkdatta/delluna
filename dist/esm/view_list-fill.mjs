export const name="view_list-fill";
export const id="dl_ab58bb555882167791aa";
export const url=new URL("../icons/view_list-fill.svg?v=2aa793ebaeb6e4f77dd6ff188f50bc4493c51a386c0bbb6333f1e35ffce3e2c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
