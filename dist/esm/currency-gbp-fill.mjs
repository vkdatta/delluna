export const name="currency-gbp-fill";
export const id="dl_6269740e6dcf428092e4";
export const url=new URL("../icons/currency-gbp-fill.svg?v=b9f12295965b852d8d9567835fdd056b085020584589468f5776a86349ff41d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
