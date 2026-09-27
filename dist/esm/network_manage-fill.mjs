export const name="network_manage-fill";
export const id="dl_bf57cb102e88819a82ea";
export const url=new URL("../icons/network_manage-fill.svg?v=83b355ce0943edbea5a54ce34fa78a4b57ad7897a1f09ebb37aeda17b2a877f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
