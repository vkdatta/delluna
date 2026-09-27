export const name="fluid_med-fill";
export const id="dl_c3a2761d6400ad19fc89";
export const url=new URL("../icons/fluid_med-fill.svg?v=2ec77a353c5e7081978f55ddca25d9f41a71de5038262be50b5ad207c1273cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
