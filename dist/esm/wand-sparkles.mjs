export const name="wand-sparkles";
export const id="dl_68e7b35f73034c1a9538";
export const url=new URL("../icons/wand-sparkles.svg?v=0406d121a02dba9aca979bcb1e6841485741b63d43f815f619f727299f5689a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
