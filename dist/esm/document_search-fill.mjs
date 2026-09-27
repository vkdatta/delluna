export const name="document_search-fill";
export const id="dl_583d5b5a30e0d75dce11";
export const url=new URL("../icons/document_search-fill.svg?v=1bb16e9030e5ce13776466cbdf35682f5b76299a717884301eaad9c19d4ba2db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
