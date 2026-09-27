export const name="git-diff-fill";
export const id="dl_2ebe964e0ce84bc89047";
export const url=new URL("../icons/git-diff-fill.svg?v=99245609dfc07dec3d3cc1d3e7453f4c4391294db23d44d4ba534fa8b6b154f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
