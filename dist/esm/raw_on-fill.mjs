export const name="raw_on-fill";
export const id="dl_746a4b14520fdb4d8b52";
export const url=new URL("../icons/raw_on-fill.svg?v=d3ca2c6d79fe751dc4b85a045084f3e9d4447ea297cb49b3c99bf155b7c8b636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
