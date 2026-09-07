export const name="tree-structure-bold";
export const id="dl_0f278833e83449cf9277";
export const url=new URL("../icons/T/tree-structure-bold.svg?v=18e15c937473e2a58b84555b58214b9d5bbe9f3b8ef6386b5e0a92f239110185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
