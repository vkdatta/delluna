export const name="contract_edit";
export const id="dl_5d653a36d0fb6bccd16e";
export const url=new URL("../icons/contract_edit.svg?v=edcb25172f106fd940d463a68ccd2ff568a95dbec83c03b7d2e26450a0c0ac0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
