export const name="swatches-duotone";
export const id="dl_fad5921b4daf4e228f07";
export const url=new URL("../icons/swatches-duotone.svg?v=e3ab3d2d87ffb3c922b85d40a7670aa15d88326c395c82221a13fe62d610cf43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
