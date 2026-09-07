export const name="star-half-fill";
export const id="dl_413b5669ac424d8da421";
export const url=new URL("../icons/S/star-half-fill.svg?v=0327b7d0fd6325139b65674e1f7391cb3ffa0de5521a3df2c1f2b11e10615be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
