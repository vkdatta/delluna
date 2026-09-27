export const name="git-fork-duotone";
export const id="dl_d7beb6fc5c1a48a2afdd";
export const url=new URL("../icons/git-fork-duotone.svg?v=00589ee9942502b0610945c4ac0e7d78b024a9bec2d51904d213319a214c87c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
