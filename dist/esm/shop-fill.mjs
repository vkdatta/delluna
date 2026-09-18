export const name="shop-fill";
export const id="dl_3df0e5688a58496fb296";
export const url=new URL("../icons/shop-fill.svg?v=80b08397b3a1625aaf3e40cf7a9be53399fdf82977eded87ea96c9248197e6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
