export const name="git-diff-bold";
export const id="dl_98c966bc1e5e4140951b";
export const url=new URL("../icons/git-diff-bold.svg?v=557433fe15fad63522d44e06dba7ef8f27fe070528464bf08940d13f43ca9941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
