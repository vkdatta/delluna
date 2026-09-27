export const name="relax-fill";
export const id="dl_2f7c1f0b3a4eae27b771";
export const url=new URL("../icons/relax-fill.svg?v=363ddac29edb95a0fe4eb63741b48f2b88832c3055ef5abac603fe2f903f5345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
