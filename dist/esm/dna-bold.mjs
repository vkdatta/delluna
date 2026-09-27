export const name="dna-bold";
export const id="dl_cdef57ff216b41148d7e";
export const url=new URL("../icons/dna-bold.svg?v=1144573d725361bbfa918f343b3ce0df47eb26a4486715cf50612a8c373a1f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
