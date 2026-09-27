export const name="touch_double_2-fill";
export const id="dl_fb9e50dc55995cfb7249";
export const url=new URL("../icons/touch_double_2-fill.svg?v=2fb2836cda0d506f92bfe6d10c3c77cfb88a65cb05d42a680fb696b744628a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
