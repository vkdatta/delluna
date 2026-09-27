export const name="cruelty_free-fill";
export const id="dl_9f9a89360f8aff420634";
export const url=new URL("../icons/cruelty_free-fill.svg?v=d135555db35e84c31360b4931dbb396853ccf96292087537a11c6d74cb8ce5b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
