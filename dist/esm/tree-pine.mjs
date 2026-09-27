export const name="tree-pine";
export const id="dl_f8909ef3b4f240fabf58";
export const url=new URL("../icons/tree-pine.svg?v=41ebc926cfecd395ac2e6a3583794da078999d73da6b61828c5e13058b7d9671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
