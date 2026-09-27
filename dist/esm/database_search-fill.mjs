export const name="database_search-fill";
export const id="dl_3f282bfa43c96f978486";
export const url=new URL("../icons/database_search-fill.svg?v=0aa1dd75c3bfef465048f137e7ba4882d75d535dcf34d0bcf4b0234571b14b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
