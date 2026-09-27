export const name="cooking-pot-fill";
export const id="dl_a54a5750841b478fa896";
export const url=new URL("../icons/cooking-pot-fill.svg?v=9ea41aafcda609f294da8639332fbace0a90d7fbe30d8ae1797c3d2d71be8c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
