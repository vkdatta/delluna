export const name="grocery-fill";
export const id="dl_9acb49c2c129102244ba";
export const url=new URL("../icons/grocery-fill.svg?v=2cd58c03e6515cdcc06fcd1dd7e0dcada345b66bca5d3dc40b47ee9995d42060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
