export const name="lock-laminated-fill";
export const id="dl_8f2e5be5cb2b4e1c8f39";
export const url=new URL("../icons/lock-laminated-fill.svg?v=f87bd0a80c85525d8ff7db801bff6f6b8e534c78f02c753243da1a712869b2ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
