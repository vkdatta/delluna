export const name="tree-pine";
export const id="dl_f8909ef3b4f240fabf58";
export const url=new URL("../icons/tree-pine.svg?v=9ab515adee0c425dc2d882d1e490433069a3b5223f6da4b77f3251e86cc7f27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
