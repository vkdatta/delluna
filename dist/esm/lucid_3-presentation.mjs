export const name="lucid_3-presentation";
export const id="dl_f90f2b482c964f8cadd2";
export const url=new URL("../icons/lucid_3-presentation.svg?v=c0101abdb9cd9aa843369ee30d8bc399ab5ea17966c8e252967a68ba9ff4f4e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
