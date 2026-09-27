export const name="tree-structure-thin";
export const id="dl_585aa71e75117b46031f";
export const url=new URL("../icons/tree-structure-thin.svg?v=2ca7b3fe9f842b1a1626e3bb60f84770d33722355758baaceb178490d43e605b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
