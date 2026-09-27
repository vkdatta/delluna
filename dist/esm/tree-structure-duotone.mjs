export const name="tree-structure-duotone";
export const id="dl_6fa42f387f8c7c070285";
export const url=new URL("../icons/tree-structure-duotone.svg?v=8d17753cd644d2db4c9d5d9c67c3d48d86e1aeb55f6da8f8645ff56d2842f01f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
