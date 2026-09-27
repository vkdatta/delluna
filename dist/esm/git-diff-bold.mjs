export const name="git-diff-bold";
export const id="dl_98c966bc1e5e4140951b";
export const url=new URL("../icons/git-diff-bold.svg?v=c4ca6a5738279b21b23a109ce3ea52283936c8070d26e2d5a457a79dfde171a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
