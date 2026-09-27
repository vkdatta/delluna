export const name="chart-bar-horizontal-duotone";
export const id="dl_2b09c2ec1ba34fd7abf1";
export const url=new URL("../icons/chart-bar-horizontal-duotone.svg?v=28437485dbfedf7736092b6308810fe4f835947d9e5f68b41eddbf33ec498f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
