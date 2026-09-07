export const name="shirt-folded-light";
export const id="dl_003192acb26b48ff95ef";
export const url=new URL("../icons/S/shirt-folded-light.svg?v=0c23e2a003aa8bda42274fa52e7003f5ba4f52f1d11446c6336a06da5ec849d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
