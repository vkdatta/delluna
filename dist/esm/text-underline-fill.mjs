export const name="text-underline-fill";
export const id="dl_b4c3b8a75bdb72530739";
export const url=new URL("../icons/text-underline-fill.svg?v=1e4a6e90504e186d0e0e453c90c2cbdad8c239d20e0c2a15763f1f6a88258d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
