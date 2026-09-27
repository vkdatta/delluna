export const name="device-mobile-speaker-duotone";
export const id="dl_d1b3cd5de12c4d9f82d9";
export const url=new URL("../icons/device-mobile-speaker-duotone.svg?v=31c45d4b9be9347f79dc29d8355617112330be87c5458cfddb94c7e24258352c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
