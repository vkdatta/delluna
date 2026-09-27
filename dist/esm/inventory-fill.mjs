export const name="inventory-fill";
export const id="dl_f2c7e8372d6fc7b6925b";
export const url=new URL("../icons/inventory-fill.svg?v=544419a8c694fd3b78352b54defade6b545b5139db51fe37b60270d9c9080c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
