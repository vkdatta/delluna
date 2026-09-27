export const name="couch-fill";
export const id="dl_bd6637491d7c4252a7c6";
export const url=new URL("../icons/couch-fill.svg?v=9215aa2ca2e9bb26d32f158ab56d1e25a85343ccaf7aa7ee0fa24b0893b85f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
