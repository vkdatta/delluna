export const name="tree-evergreen-fill";
export const id="dl_2c586c00c2add146abb9";
export const url=new URL("../icons/tree-evergreen-fill.svg?v=2fcba7de52d64b270fd85b11dc8771c548315e2b93a467d36958a4bffde74a64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
