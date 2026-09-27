export const name="sync_lock";
export const id="dl_7da5d6474257ecfd3a0c";
export const url=new URL("../icons/sync_lock.svg?v=8fd36f0e8884b135189dc29b1a93f45b9eec1a60caf88c5f46176ff4c2bcb9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
