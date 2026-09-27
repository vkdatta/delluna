export const name="onsen-fill";
export const id="dl_bffffac5ac7d51e81775";
export const url=new URL("../icons/onsen-fill.svg?v=b2485baf616ec759ebc98308f35639489d25c3b0614f8062b523250d01c2c576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
