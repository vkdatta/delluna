export const name="rainy_snow-fill";
export const id="dl_a25138662937abea8750";
export const url=new URL("../icons/rainy_snow-fill.svg?v=f6d688dadf6079783dc48fc89be24294f9b58ff884d6b142d3a42395a36daf01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
