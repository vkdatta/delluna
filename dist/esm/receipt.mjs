export const name="receipt";
export const id="dl_d33ff8b04fc14f168eac";
export const url=new URL("../icons/receipt.svg?v=5fe5a5b0156f3c52c5632f71ff4d709bc2e745231d4e099f06ed16e6ee8ec634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
