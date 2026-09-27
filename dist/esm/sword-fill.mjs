export const name="sword-fill";
export const id="dl_50613876d186df0aef53";
export const url=new URL("../icons/sword-fill.svg?v=d321b655ec6e69dda797b5f4bf66986c25bde29dc38a28bae9d0889f47766fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
