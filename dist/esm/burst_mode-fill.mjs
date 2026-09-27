export const name="burst_mode-fill";
export const id="dl_372df2389a748e163aac";
export const url=new URL("../icons/burst_mode-fill.svg?v=b60f128df6f8dbf57db87d3df00117798de6b88073638f65dfe5f226f259cf0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
