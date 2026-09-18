export const name="pin";
export const id="dl_ba5cbd889ea442a49001";
export const url=new URL("../icons/pin.svg?v=2bb6aca6cb361fbf21b81b7f2e643d80ed05f7a5a7d55e95954733f6a4ed0ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
