export const name="remove_shopping_cart-fill";
export const id="dl_d674800915b345dba8c8";
export const url=new URL("../icons/remove_shopping_cart-fill.svg?v=8a951df509222aa563dba2594b7600177cc74dbcd618e02f1c409a5c8a7b64b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
