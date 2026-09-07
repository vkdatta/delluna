export const name="battery-charging-bold";
export const id="dl_62119fb8cb4540608318";
export const url=new URL("../icons/battery-charging-bold.svg?v=a700f8087f8d2e8315fe628e7c82c32f1616e5c2196e62252f1a82605e89b216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
