export const name="stamp-fill";
export const id="dl_a1966f43c38b4e16bc41";
export const url=new URL("../icons/S/stamp-fill.svg?v=432284dff018e4194cb17b7123ef9e2005e83f73626e07a08005089a5ba516c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
