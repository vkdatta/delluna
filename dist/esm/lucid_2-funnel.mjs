export const name="lucid_2-funnel";
export const id="dl_8cae1a06dbc942418bb9";
export const url=new URL("../icons/lucid_2-funnel.svg?v=625dff6139ed9ca1845781b3df6519c498d06b9fa6941f0ee7109eb07bd7afec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
