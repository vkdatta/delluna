export const name="hematology";
export const id="dl_07fd9a62915d78789ed1";
export const url=new URL("../icons/hematology.svg?v=656d68a13fc047b5db59f18e7817b2fd613b327c8b7ca3c1e3c7e61dfe307d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
