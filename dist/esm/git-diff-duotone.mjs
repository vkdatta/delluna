export const name="git-diff-duotone";
export const id="dl_5fb0c43d908941c4879e";
export const url=new URL("../icons/git-diff-duotone.svg?v=53e4d893a4dee6b9055435818576725386028dfbf24cb863dc1445de5bdb1bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
