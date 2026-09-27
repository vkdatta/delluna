export const name="palette-duotone";
export const id="dl_8383c56419724c64ba92";
export const url=new URL("../icons/palette-duotone.svg?v=d6d320588be7f3aa9b4ef4a822d240e0f128b80742a2aa04fcbdcbaf2a535717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
