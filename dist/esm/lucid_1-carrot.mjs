export const name="lucid_1-carrot";
export const id="dl_0fea61e868384822bd1f";
export const url=new URL("../icons/lucid_1-carrot.svg?v=b628503576e55c64a23369e489c01e34d4c470ac1d265cd16c917aabe4a28f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
