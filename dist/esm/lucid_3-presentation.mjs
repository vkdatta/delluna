export const name="lucid_3-presentation";
export const id="dl_f90f2b482c964f8cadd2";
export const url=new URL("../icons/lucid_3-presentation.svg?v=523e304c72ae9810022d8fe4fcba807c827815ec949186300b7b4c13446794d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
