export const name="inactive_order";
export const id="dl_e71b1b7e90fe63bce9b8";
export const url=new URL("../icons/inactive_order.svg?v=2a10dbde42a348f96967c7bff55b54dc3601f49cb6704ebbd7b080538549a7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
