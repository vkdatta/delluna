export const name="picnic-table-light";
export const id="dl_b405a0a3983545ec8735";
export const url=new URL("../icons/picnic-table-light.svg?v=bf456286081810148f8d9fbc3d7cd521569367de4f13395723af54bc8092b184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
