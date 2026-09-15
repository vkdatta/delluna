export const name="document_search-fill";
export const id="dl_aba9d8dbd13a42969022";
export const url=new URL("../icons/D/document_search-fill.svg?v=e54358a04388eebaeff4c953372f2a408dcb89657845d4b500ad6c73a47b4935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
