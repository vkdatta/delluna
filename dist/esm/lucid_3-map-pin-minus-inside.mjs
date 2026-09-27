export const name="lucid_3-map-pin-minus-inside";
export const id="dl_f9b9c1c0cefc429d8f39";
export const url=new URL("../icons/lucid_3-map-pin-minus-inside.svg?v=1e69cfcc14c421cd8b8912cb65c68a496fb54b0fe662f4903f8d012d1651b14e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
