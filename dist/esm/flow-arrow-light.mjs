export const name="flow-arrow-light";
export const id="dl_0458d3a3fe814412be11";
export const url=new URL("../icons/flow-arrow-light.svg?v=c6c91882026d6b912fafde680076a6613465d1aeb1f9b865964e6176cddb784f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
