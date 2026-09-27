export const name="percent_discount-fill";
export const id="dl_dbaa2c57023d291a5d61";
export const url=new URL("../icons/percent_discount-fill.svg?v=c73f2ee2654cfb337a72a22c1dfb6e0d2eb2e1111d72ebd995fc6d7cf59bda77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
