export const name="directions";
export const id="dl_a73a02e16a25ed807094";
export const url=new URL("../icons/directions.svg?v=f31dbab9b9959a62dee5c957599c76d30f69f43e73bc2dd33588e225f1921877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
