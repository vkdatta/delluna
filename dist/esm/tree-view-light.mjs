export const name="tree-view-light";
export const id="dl_bc843cca9789dcb930a0";
export const url=new URL("../icons/tree-view-light.svg?v=5f407f0e856da21d6e686fffd4c695f14e8b88506c4d402d4d02fff07deef98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
