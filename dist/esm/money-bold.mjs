export const name="money-bold";
export const id="dl_443fdf7d6b61407c9324";
export const url=new URL("../icons/money-bold.svg?v=232eb6bf37fe2534fe7c03b75904a6f90a54d3825380708c5f4c072c1c28e92b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
