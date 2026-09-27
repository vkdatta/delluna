export const name="wheat-fill";
export const id="dl_3ec8b93798c07de33eb1";
export const url=new URL("../icons/wheat-fill.svg?v=dca4db072ed0e9205cc61b91fcd56345c9c9f57ba540933eee6d9ecd08b45163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
