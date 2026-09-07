export const name="tree-structure-thin";
export const id="dl_0cf8b0beebc9447ab513";
export const url=new URL("../icons/T/tree-structure-thin.svg?v=5e6ec186a2f48f2d65d39478ff2880a8bd7857896b6d24c49b6d74f824257bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
