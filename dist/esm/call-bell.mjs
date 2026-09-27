export const name="call-bell";
export const id="dl_9f820a7f57044933b51f";
export const url=new URL("../icons/call-bell.svg?v=1e39bfe3a1f4cbf959cd0722169faf4d5a19a95d4330db02f2a188fc663c11c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
