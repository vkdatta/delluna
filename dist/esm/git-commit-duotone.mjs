export const name="git-commit-duotone";
export const id="dl_993706cd275d498d90b2";
export const url=new URL("../icons/git-commit-duotone.svg?v=498dfb0f4dec4b8ab7a91c6b8595f2a5a9d9c21ce8e698c2f66435850bbf0e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
