export const name="category-fill";
export const id="dl_87a510a08fda4e78a0d2";
export const url=new URL("../icons/category-fill.svg?v=b95bce8276b8ff58a272d334fd9d8026a30cbabd8f068b66c4f1e50e0a9f1a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
