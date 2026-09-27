export const name="heartbeat-duotone";
export const id="dl_8cd1dea33c1348e5b32c";
export const url=new URL("../icons/heartbeat-duotone.svg?v=e2b88099fe79dde62b1f319cd1db49f8f90cef2f5689aa641f67c7dd0171d539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
