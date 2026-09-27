export const name="cat-fill";
export const id="dl_00fa6cb7d3ff4be48447";
export const url=new URL("../icons/cat-fill.svg?v=b052211c082eda8488a3e17b3439a0814a9e3fda25478778a53c2b2caca0a11b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
