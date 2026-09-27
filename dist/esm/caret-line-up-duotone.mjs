export const name="caret-line-up-duotone";
export const id="dl_f6d2ac1eeff14171b733";
export const url=new URL("../icons/caret-line-up-duotone.svg?v=ae263d9da52962e1ec6fdef7421d27adfd18e8fc53c8027d66d6d6b64ac90d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
