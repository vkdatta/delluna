export const name="git-merge";
export const id="dl_774e38637c6b4e5b81ad";
export const url=new URL("../icons/git-merge.svg?v=b12228dd262ac0235075e2d2380598be8e592b316ce25dec522871206d5f620d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
