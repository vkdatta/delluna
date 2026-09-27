export const name="approval_delegation_off";
export const id="dl_3efcad679b3cfe90b8ea";
export const url=new URL("../icons/approval_delegation_off.svg?v=56e245700b9868f3ad18b2b2f92e246edd734efa7d187721a22aa473a7a4e8b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
