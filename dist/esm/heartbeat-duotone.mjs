export const name="heartbeat-duotone";
export const id="dl_8cd1dea33c1348e5b32c";
export const url=new URL("../icons/heartbeat-duotone.svg?v=7ded57a4d87b08b2de2361bb41b0a4c89524bf5602e829470265376e76cd0b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
