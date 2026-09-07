export const name="palette-duotone";
export const id="dl_8383c56419724c64ba92";
export const url=new URL("../icons/palette-duotone.svg?v=f88e53a831d175ba02b0ba49d8be24be22963a1522cd8e55bf07d02897b8c7eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
