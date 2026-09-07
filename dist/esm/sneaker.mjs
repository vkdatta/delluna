export const name="sneaker";
export const id="dl_cff06b3271f14c0dbd1c";
export const url=new URL("../icons/S/sneaker.svg?v=9a8c0e818c23e5e62db2344cabc9a90a3e719627f739803d16ccc9d2284da28a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
