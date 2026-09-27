export const name="saved_search-fill";
export const id="dl_5e8ea95d113b39c9919c";
export const url=new URL("../icons/saved_search-fill.svg?v=fc421df92b088289042dfb8135e8383fd69aa432a879d29c3bd662db5e7a622b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
