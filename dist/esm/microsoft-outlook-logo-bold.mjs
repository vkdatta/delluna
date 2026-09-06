export const name="microsoft-outlook-logo-bold";
export const id="dl_57eb7a70bb9447548d21";
export const url=new URL("../icons/microsoft-outlook-logo-bold.svg?v=cdef349a4f1b62aa0b5b498e36c61e849b9ad3d2c0fec007801861183f5a4d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
