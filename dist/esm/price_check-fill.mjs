export const name="price_check-fill";
export const id="dl_14d3a8197ad256ba5e41";
export const url=new URL("../icons/price_check-fill.svg?v=f4c695c0343cd4c5c8926dfe351d7445a0494d76d9341aea86ec55b1860c7c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
