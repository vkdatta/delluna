export const name="tree-deciduous";
export const id="dl_7aa48a8efcae4143ac29";
export const url=new URL("../icons/tree-deciduous.svg?v=bec10fc48dc9d29a09e7a6fdd0504ce0e36819ddbc3f5c33e66146786377af01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
