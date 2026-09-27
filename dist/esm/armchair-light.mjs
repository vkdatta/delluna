export const name="armchair-light";
export const id="dl_3c8d12dd7df6459984fc";
export const url=new URL("../icons/armchair-light.svg?v=fbc6bf4f3c6ab52ac670ac9a87a7f2ef0fa9655d3d5e5eaae85ca1e2c83c0aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
