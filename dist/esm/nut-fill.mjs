export const name="nut-fill";
export const id="dl_f609ac6e9b594f7b8af0";
export const url=new URL("../icons/nut-fill.svg?v=ebc06654db9ba52653e248ec6074ef35a2dce7e067ad7269c5c1f33dcbeb5e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
