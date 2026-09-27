export const name="chip_extraction-fill";
export const id="dl_20c4bb231dbf42827e57";
export const url=new URL("../icons/chip_extraction-fill.svg?v=e4745f9f961b3aa155a1d3cdef017d083f03825070545bcbb85c6beb472f4fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
