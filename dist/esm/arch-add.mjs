export const name="arch-add";
export const id="dl_b63fac043807464baad3";
export const url=new URL("../icons/add/arch-add.svg?v=7a32c74afdadcd2474b60f917c018b82f859403e1516d3455afd36049e10e729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
