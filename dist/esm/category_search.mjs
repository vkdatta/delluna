export const name="category_search";
export const id="dl_f86c7122e2724bb85b0c";
export const url=new URL("../icons/category_search.svg?v=ef8d6686fa144209f536d9b2f8717ea704ebcea412a1e30348c8fc28d3eb8b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
