export const name="pip_exit-fill";
export const id="dl_3b7fcb88aa0c42cb80c8";
export const url=new URL("../icons/pip_exit-fill.svg?v=fbebb62a432431c51252374aa6aae4961f859728e0b5e39e8555f3372f021622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
