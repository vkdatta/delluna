export const name="y_circle-fill";
export const id="dl_f9abdae5231f4cc293c5";
export const url=new URL("../icons/y_circle-fill.svg?v=45aaab0c14e35e12a1d783b32e3dc8da1d1298cb7004257e07ed8978e2dc4ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
