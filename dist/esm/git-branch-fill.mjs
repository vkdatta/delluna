export const name="git-branch-fill";
export const id="dl_58c4ba61821d45cfb0e4";
export const url=new URL("../icons/git-branch-fill.svg?v=c38333ad2b9cd87ad9fdaa497482414669a5d0b377e2fc640cd02965246f8a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
