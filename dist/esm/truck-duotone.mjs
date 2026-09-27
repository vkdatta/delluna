export const name="truck-duotone";
export const id="dl_6ea0213e9f91450b81a8";
export const url=new URL("../icons/truck-duotone.svg?v=299464558dc396c62b09f02340fc35414d8b69b512936a0cd50faf5a4007c219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
