export const name="texture_minus-fill";
export const id="dl_963034120db66657c637";
export const url=new URL("../icons/texture_minus-fill.svg?v=2592e869b229eb1c02160d53c187366fda797882a958582df4321f712aabf805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
