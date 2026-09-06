export const name="git-diff-duotone";
export const id="dl_5fb0c43d908941c4879e";
export const url=new URL("../icons/git-diff-duotone.svg?v=8681483d50dca2d393c4fabf7fbfb1cd2fceec587f6582a0038c221d1a7569a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
