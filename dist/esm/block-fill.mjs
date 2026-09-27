export const name="block-fill";
export const id="dl_b464babf74bcad2cec4f";
export const url=new URL("../icons/block-fill.svg?v=d8f946ac4cbcba2d2ed29f23d94a86d99033790619962180132ade2f57ccedda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
