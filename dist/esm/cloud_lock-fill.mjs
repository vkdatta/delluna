export const name="cloud_lock-fill";
export const id="dl_c8beb9c55f9a426a99ca";
export const url=new URL("../icons/C/cloud_lock-fill.svg?v=402f49e8afd675648bbb25661d3860d849d38eca9071e2c7781c1733eb2004b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
