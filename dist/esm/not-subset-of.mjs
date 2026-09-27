export const name="not-subset-of";
export const id="dl_d104cd8ee3074905b197";
export const url=new URL("../icons/not-subset-of.svg?v=e507cae42606a222432bd4348f724c3fa8a82d9d6213289483634ebcb3c16fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
