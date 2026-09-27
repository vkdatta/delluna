export const name="airwave-fill";
export const id="dl_0a54a091381cfc73ac2f";
export const url=new URL("../icons/airwave-fill.svg?v=3d216c9bc051a55c10c9b72e28f4a0a19133c13e8ee332302d3ef342999441cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
