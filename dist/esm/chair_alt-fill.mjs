export const name="chair_alt-fill";
export const id="dl_45c79588575e2e1e3552";
export const url=new URL("../icons/chair_alt-fill.svg?v=90b0b26aca71b0e71a5f33c03ac3e37c907e0a4c8158370ecc7d3b5770871369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
