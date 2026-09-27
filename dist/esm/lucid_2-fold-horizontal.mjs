export const name="lucid_2-fold-horizontal";
export const id="dl_3958c29e3abb46c28a06";
export const url=new URL("../icons/lucid_2-fold-horizontal.svg?v=a6f5c98d6987bd9e0139255d776a4a7a879c3de23ec338bba6727d81aa9170df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
