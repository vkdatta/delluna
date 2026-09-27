export const name="medical_mask";
export const id="dl_123f3bc79b2c1d271b49";
export const url=new URL("../icons/medical_mask.svg?v=f1f6ad54de544af23126cdfca61e6a7148ce3ba8abd81e5e58329d1d3c275c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
