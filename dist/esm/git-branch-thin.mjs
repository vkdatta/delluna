export const name="git-branch-thin";
export const id="dl_aa784b61ae2f44aab239";
export const url=new URL("../icons/git-branch-thin.svg?v=c88d0972bcaa8d417f039ae734443ea931599427c7449ed91804e0aabaf6665b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
