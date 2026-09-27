export const name="palette-duotone";
export const id="dl_8383c56419724c64ba92";
export const url=new URL("../icons/palette-duotone.svg?v=83afe37c764b32bbb73cb7e19b6bbd7e7853564eb544d0afd324803416942b0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
