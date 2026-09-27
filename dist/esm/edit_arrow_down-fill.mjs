export const name="edit_arrow_down-fill";
export const id="dl_635219988603028c9809";
export const url=new URL("../icons/edit_arrow_down-fill.svg?v=2765ed3e7a44ee41f2cf92511495130ca694973d14ed3b03e19f408f2c89d9ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
