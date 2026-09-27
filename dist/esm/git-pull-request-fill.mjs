export const name="git-pull-request-fill";
export const id="dl_50c180d04a92409683d6";
export const url=new URL("../icons/git-pull-request-fill.svg?v=e1663c3aa74c32b37abb3eac1a8e31ed82c56e7421a7d898d1ddea0198e1186d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
