export const name="memory_alt-fill";
export const id="dl_7b9363682d9d98278686";
export const url=new URL("../icons/memory_alt-fill.svg?v=4f04ad5313a045d447eb0829caec1035ad9f44ae542eb782184f8710419913ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
