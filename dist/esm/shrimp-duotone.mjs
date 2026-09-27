export const name="shrimp-duotone";
export const id="dl_b48b9437f9cbe73f393b";
export const url=new URL("../icons/shrimp-duotone.svg?v=7f038fc63fbfbd4352ad877cfb331d3cd67fde9daee336b06a4f85751f5c0599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
