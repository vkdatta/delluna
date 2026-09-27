export const name="flash_on-fill";
export const id="dl_ae9bc4ae7157fc99565e";
export const url=new URL("../icons/flash_on-fill.svg?v=0078bff0d749e8a6c734f2ad9f378b61e66e84f37d1c628014cd035de279a330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
