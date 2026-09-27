export const name="tree-palm-fill";
export const id="dl_4f82f69a46b4d13eb573";
export const url=new URL("../icons/tree-palm-fill.svg?v=f1e9a7933fa606109518fd1c16930ea377f2b50b7f7960106768f8134fb525f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
