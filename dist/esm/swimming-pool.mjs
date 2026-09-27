export const name="swimming-pool";
export const id="dl_53cd62edb27c65a913c3";
export const url=new URL("../icons/swimming-pool.svg?v=1d3c63e62a9182833fdb2f9ea52d38a7dcedb5440f181517d2076d4bec6c26c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
