export const name="filter_4-fill";
export const id="dl_cfaeefd21001be359837";
export const url=new URL("../icons/filter_4-fill.svg?v=745f5875903dc3f680840c85c4bd765b01be4e3a50e70360892d018fd1570eb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
