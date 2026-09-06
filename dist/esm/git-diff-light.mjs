export const name="git-diff-light";
export const id="dl_7002360bbd0048a3a9b7";
export const url=new URL("../icons/git-diff-light.svg?v=ffef4f4ff712df3c83cd41b8f40f4076ed65137175d2045fbbf6d50168bd8ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
