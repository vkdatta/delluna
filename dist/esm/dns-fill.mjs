export const name="dns-fill";
export const id="dl_bc3cea7b64843ccabbc0";
export const url=new URL("../icons/dns-fill.svg?v=3fc0e88ec32f8cc7e694fe1822a27447315bd5c8fab066450eebee1c9125020b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
