export const name="fluorescent-fill";
export const id="dl_2f33c330c1a3ee74ec53";
export const url=new URL("../icons/fluorescent-fill.svg?v=2f5cd7037988d887d39f1d9ac36e0c7d575bceb4f7003aa384f5ad9d9a0bfe12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
