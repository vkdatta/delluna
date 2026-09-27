export const name="waves-arrow-down";
export const id="dl_f1c4747891b2497b92e3";
export const url=new URL("../icons/waves-arrow-down.svg?v=dbf7a44d983afa15d0486fdf9be503558ba99e4c32bb7fb08442e922732e4778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
