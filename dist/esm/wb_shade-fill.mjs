export const name="wb_shade-fill";
export const id="dl_3cc646d9fc07a21a835f";
export const url=new URL("../icons/wb_shade-fill.svg?v=399d9d3607cc651a331aaa22023ceae80efea69af82db123b224861855599eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
