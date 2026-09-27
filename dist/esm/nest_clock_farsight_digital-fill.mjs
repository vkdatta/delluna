export const name="nest_clock_farsight_digital-fill";
export const id="dl_0c22cdcc23f6a9d37e1c";
export const url=new URL("../icons/nest_clock_farsight_digital-fill.svg?v=5556cb17b892e40ba245c35c0595816fd63fd3306c56a748b19cf74b3b5a9272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
