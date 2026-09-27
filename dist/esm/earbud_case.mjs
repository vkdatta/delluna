export const name="earbud_case";
export const id="dl_78747864a09964d15098";
export const url=new URL("../icons/earbud_case.svg?v=c3adbfc5f0d45eb5a01846cb456db0de4fe922f7bffd949841fcb95c220fe23e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
