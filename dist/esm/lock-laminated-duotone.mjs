export const name="lock-laminated-duotone";
export const id="dl_0f470f012b524238addb";
export const url=new URL("../icons/lock-laminated-duotone.svg?v=c786ef79dc51e3fe0a0646abdb58881c21d032e03ffbc7850f214df49c6a4a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
