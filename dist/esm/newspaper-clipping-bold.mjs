export const name="newspaper-clipping-bold";
export const id="dl_91db09d9189d42168c2e";
export const url=new URL("../icons/newspaper-clipping-bold.svg?v=8a538a5c0b3bce2c7ddfd939da8a4eae6ab709567c6db50bd9e50fae01f7a75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
