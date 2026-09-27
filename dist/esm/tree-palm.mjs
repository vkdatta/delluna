export const name="tree-palm";
export const id="dl_5232e0be5c7b4289ae21";
export const url=new URL("../icons/tree-palm.svg?v=f321dcff9f1ef8a9b56295e10d5575003f5333c07fd8ca6fdb9606ba8ef66a8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
