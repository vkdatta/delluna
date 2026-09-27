export const name="table_convert";
export const id="dl_f3d3a88fec6fe623f0b0";
export const url=new URL("../icons/table_convert.svg?v=46f4bb38466137a70e2e7ca572e6454ebb79e1ffc191aeac22e05ed03102c954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
