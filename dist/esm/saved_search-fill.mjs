export const name="saved_search-fill";
export const id="dl_0bcebaa7f3a10c2699ac";
export const url=new URL("../icons/saved_search-fill.svg?v=b705bee268dfb92c475c6f15a47670846976289eaa9d5ddab8687760b28c7a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
