export const name="git-merge";
export const id="dl_774e38637c6b4e5b81ad";
export const url=new URL("../icons/git-merge.svg?v=f1e90a2b77d6cde0e593044ead27ccb10a97a3783a84202eed8e51bf95382dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
