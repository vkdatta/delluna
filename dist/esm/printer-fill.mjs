export const name="printer-fill";
export const id="dl_81e985286ea14e58ab01";
export const url=new URL("../icons/printer-fill.svg?v=0497cd2dd678a613dd4f318a304b4e9331f0ddebd66e58d2b8bc3a0a00430391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
