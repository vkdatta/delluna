export const name="git-diff-duotone";
export const id="dl_5fb0c43d908941c4879e";
export const url=new URL("../icons/git-diff-duotone.svg?v=9e50a6cadfc7a0dd9b72ec8834629951d85940810f4f4e10bcbca1388f2d648e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
