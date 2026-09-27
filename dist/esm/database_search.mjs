export const name="database_search";
export const id="dl_785d4e3c6423c22e23dd";
export const url=new URL("../icons/database_search.svg?v=3250d5b16ee98ca8deaa01f27a2aabfae1f3276d29a390146e3eb852d7711ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
