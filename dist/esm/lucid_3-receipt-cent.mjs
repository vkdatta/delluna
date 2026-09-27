export const name="lucid_3-receipt-cent";
export const id="dl_f38228bd3b9946199386";
export const url=new URL("../icons/lucid_3-receipt-cent.svg?v=92349d49bfa14f47e604eb4d0a73d14b7582529524021ec3ebeebc9ef25b5438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
