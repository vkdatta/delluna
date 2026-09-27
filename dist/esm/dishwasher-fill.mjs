export const name="dishwasher-fill";
export const id="dl_aaa12ae9b1bb5c1004e6";
export const url=new URL("../icons/dishwasher-fill.svg?v=6df4eafb7c027b1dcfd41eb8cd52d0359715995857954d809596e01d857182eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
