export const name="parking_meter";
export const id="dl_2a3a21de428444d8a869";
export const url=new URL("../icons/P/parking_meter.svg?v=c9d8ae5b7326f14c2ada10dd9a25941e6bb51257e36544c6d42d349b392d362c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
