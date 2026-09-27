export const name="tree-structure-fill";
export const id="dl_e588d6a50ca422240129";
export const url=new URL("../icons/tree-structure-fill.svg?v=8d59582b503158f8adf56db22a99eb39483ab244b38a2f61a5675b2639d0b2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
