export const name="device-tablet-duotone";
export const id="dl_4497d4ede1394a0eb29f";
export const url=new URL("../icons/device-tablet-duotone.svg?v=977bc839b7c63380d0cf6d28067c54459f9cc106303a5de6e0f8a5c1442b60a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
