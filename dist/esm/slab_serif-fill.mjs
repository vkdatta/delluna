export const name="slab_serif-fill";
export const id="dl_c8eb93f47f18eb715464";
export const url=new URL("../icons/slab_serif-fill.svg?v=0731fce3c5453e3f9ad5e3ce28e9a01287e3ec77485f1d5572edacb3a24092d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
