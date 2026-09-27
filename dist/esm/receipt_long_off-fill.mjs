export const name="receipt_long_off-fill";
export const id="dl_7820fa635788c9c31c4b";
export const url=new URL("../icons/receipt_long_off-fill.svg?v=34023ddc3b4acbb55cf586a873b15534083987a7886fc051d7cb33eaa02449da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
