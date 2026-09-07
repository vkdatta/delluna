export const name="floppy-disk-back-duotone";
export const id="dl_7fb94593aad1421fb2f7";
export const url=new URL("../icons/floppy-disk-back-duotone.svg?v=728aae7cad698a356a8ee8e9193b8a6f2209ea3a949417da0bd6078e63c381d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
