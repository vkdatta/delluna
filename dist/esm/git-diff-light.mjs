export const name="git-diff-light";
export const id="dl_7002360bbd0048a3a9b7";
export const url=new URL("../icons/git-diff-light.svg?v=923633e07e8e29b83a607684216b1cdbfff7e4638a4927cf3dc295f7ce1f27c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
