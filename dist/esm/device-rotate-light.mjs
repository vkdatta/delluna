export const name="device-rotate-light";
export const id="dl_90f8583951424ad4a290";
export const url=new URL("../icons/device-rotate-light.svg?v=bbe199bf34a25e4f12aa7bcde4a5b29f4e687d312a805443d19c033c63eb36b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
