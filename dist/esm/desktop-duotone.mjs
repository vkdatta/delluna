export const name="desktop-duotone";
export const id="dl_3aef17c0731146efb3d1";
export const url=new URL("../icons/desktop-duotone.svg?v=8373b9424332e60299bc0e38525373404459a5bf2ffcbc2e2ed4ad22d1a7cff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
