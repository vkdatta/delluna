export const name="git-pull-request-fill";
export const id="dl_50c180d04a92409683d6";
export const url=new URL("../icons/git-pull-request-fill.svg?v=9cff21cf5f22353d492b2852910109877403155c0276b4940b3859eab7e373f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
