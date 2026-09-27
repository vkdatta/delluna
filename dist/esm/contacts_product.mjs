export const name="contacts_product";
export const id="dl_57ca1ce332dba1b0f90b";
export const url=new URL("../icons/contacts_product.svg?v=df362c2d038f99798a31e21c0015d10bfe0482ae4de29debe4dacaddaa1cb9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
