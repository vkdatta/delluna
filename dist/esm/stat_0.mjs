export const name="stat_0";
export const id="dl_3cd1baff8ed2d5835093";
export const url=new URL("../icons/stat_0.svg?v=780428ac4e975ab54557bb77e299456cb8253d1d70b2fac8727f0a2ca0c80e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
