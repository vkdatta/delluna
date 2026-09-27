export const name="tree-palm-thin";
export const id="dl_8592797c3d485b732fbf";
export const url=new URL("../icons/tree-palm-thin.svg?v=14beaf7c4dd3ae9c57b699a7ee3aad0fa3a7d54d78271ae5052451365b0c7ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
