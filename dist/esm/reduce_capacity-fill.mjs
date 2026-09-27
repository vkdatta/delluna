export const name="reduce_capacity-fill";
export const id="dl_5b298704ee58c6f0893b";
export const url=new URL("../icons/reduce_capacity-fill.svg?v=dca6f2f2f2c07fc37057ca2ce06656b4abffae27c9f5eef07c70902db414cb93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
