export const name="saved_search-fill";
export const id="dl_13fba4fb29c1a99b77ec";
export const url=new URL("../icons/saved_search-fill.svg?v=379ed00a08fecdcf33ac67baa6d4ff2960cd9d9f2603482fcee3cfe3649a56d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
