export const name="dna-bold";
export const id="dl_cdef57ff216b41148d7e";
export const url=new URL("../icons/dna-bold.svg?v=5e7346709396d79ba38c7ff00167ca2b5db5735892edb854891f066ac11b3aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
