export const name="tree-evergreen-thin";
export const id="dl_c090127b153accae62e6";
export const url=new URL("../icons/tree-evergreen-thin.svg?v=969a91653b51caa65d6a8d6cd1df8e5cdbe8ee4b8991396f70a3d4340a95f297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
