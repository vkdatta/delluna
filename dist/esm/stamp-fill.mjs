export const name="stamp-fill";
export const id="dl_37bc03d16f2eb1206701";
export const url=new URL("../icons/stamp-fill.svg?v=432284dff018e4194cb17b7123ef9e2005e83f73626e07a08005089a5ba516c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
