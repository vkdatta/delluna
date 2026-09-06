export const name="git-merge-bold";
export const id="dl_ce0a37f5c7f0452fad86";
export const url=new URL("../icons/git-merge-bold.svg?v=6144db81e0f3a80ad2f7d70cfe40eec344d8826dd6e1839b41cb093926ed986c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
