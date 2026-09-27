export const name="approval_delegation_off-fill";
export const id="dl_88d039d6099f03b8d419";
export const url=new URL("../icons/approval_delegation_off-fill.svg?v=b197c051db70004a6b79d800564c58a9523daeaab6ec4c1ae6d6a7cb0db7b5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
