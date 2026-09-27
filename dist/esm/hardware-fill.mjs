export const name="hardware-fill";
export const id="dl_539dd100e486f8c8bc94";
export const url=new URL("../icons/hardware-fill.svg?v=b6bbcb0be053d3f584c42fc2e9f1894385945bae425fe5b704ad4ec6e47315ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
