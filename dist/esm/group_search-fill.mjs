export const name="group_search-fill";
export const id="dl_57c1613c3d6ab09b7b07";
export const url=new URL("../icons/group_search-fill.svg?v=f72ff069150fcef90d1949fae77688c270579d25d4f86e538e4eea032bff7b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
