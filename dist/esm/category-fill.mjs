export const name="category-fill";
export const id="dl_e299dc5b59e8562c3468";
export const url=new URL("../icons/category-fill.svg?v=08f337e0aedfb7bbbb91e62af34af5df473800ec01e35d1fdc5a28d5ea8bcbdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
