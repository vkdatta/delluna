export const name="swatches";
export const id="dl_7da686540a62dfa419c1";
export const url=new URL("../icons/swatches.svg?v=a8d97cdef037d959d365d1dd3b4f0c438e12fd9d8898efcae834e0cc36cf6da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
