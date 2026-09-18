export const name="approval_delegation_off-fill";
export const id="dl_b87129a0d96449c8b23a";
export const url=new URL("../icons/approval_delegation_off-fill.svg?v=b7f92d85daff419fbeb1de81758a066330a6423bceeb45f02ad2a611125559cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
