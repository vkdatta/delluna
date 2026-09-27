export const name="print_error-fill";
export const id="dl_ea4c8ad9f70f7f9ca815";
export const url=new URL("../icons/print_error-fill.svg?v=007cc4a8ea2b14d4ef32b433dc865a8976530212f032c1c5347bd96a01179310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
