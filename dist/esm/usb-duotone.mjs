export const name="usb-duotone";
export const id="dl_10600c7aec364a069ae5";
export const url=new URL("../icons/U/usb-duotone.svg?v=3d5b94a23e80c6bed015b3eac592aaeb9b584bfe5950b5b40e645c6127ef86e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
