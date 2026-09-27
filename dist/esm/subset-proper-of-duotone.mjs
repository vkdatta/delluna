export const name="subset-proper-of-duotone";
export const id="dl_6bc13f765cd0c766d2fb";
export const url=new URL("../icons/subset-proper-of-duotone.svg?v=2ac39329e0b084b3aaa2255aecebb8cc01604dc049cd83066340c8a7307a4ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
