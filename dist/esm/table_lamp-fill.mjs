export const name="table_lamp-fill";
export const id="dl_c84f9b2463ce402dbebd";
export const url=new URL("../icons/T/table_lamp-fill.svg?v=5767381edeffd679184657f35e20db2fe69fd41c800e7132aac021cf13fa68f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
