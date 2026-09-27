export const name="local_taxi-fill";
export const id="dl_d3327eb211b6d1724b6e";
export const url=new URL("../icons/local_taxi-fill.svg?v=5182e4cc025dfb2534c07daa31cdc7fe0a40f2499edb2231c1728063c5657e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
