export const name="brand_family-fill";
export const id="dl_e27f087944934ad4b7ed";
export const url=new URL("../icons/brand_family-fill.svg?v=c9acde6ace426bd9bcb9f55cfde076b19d3df3224d46f29cc620dc30fa090918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
