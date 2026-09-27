export const name="not-subset-of";
export const id="dl_d104cd8ee3074905b197";
export const url=new URL("../icons/not-subset-of.svg?v=e3e339642aa0c05d2ea73dd8fed80e4b4c6346aea18722abc88fb7d5083c757a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
