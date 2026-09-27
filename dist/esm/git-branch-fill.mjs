export const name="git-branch-fill";
export const id="dl_58c4ba61821d45cfb0e4";
export const url=new URL("../icons/git-branch-fill.svg?v=49a7d3bb89c7ac5c88a63ae58ddcc8bf1002fd201919ae30dabc065073e56433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
