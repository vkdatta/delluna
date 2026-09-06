export const name="git-merge";
export const id="dl_774e38637c6b4e5b81ad";
export const url=new URL("../icons/git-merge.svg?v=f1b4a6d14800a6618e2b25f83cba4d992dbadf9ac527596ef39b3b8f78053b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
