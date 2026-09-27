export const name="skeleton";
export const id="dl_d32da2633564044f5e21";
export const url=new URL("../icons/skeleton.svg?v=03e6b31b21742d06b25a6d3398e4920224759971b4f924064e87c0103f225e88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
