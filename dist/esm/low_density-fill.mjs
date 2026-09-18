export const name="low_density-fill";
export const id="dl_465cbb516bf343f68b2f";
export const url=new URL("../icons/L/low_density-fill.svg?v=a235ecdd19801d023c4159f8d0e3b0e34b69b0656d2e6a83ebb3603bc1c2f055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
