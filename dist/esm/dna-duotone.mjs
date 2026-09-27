export const name="dna-duotone";
export const id="dl_6128df707629449aa8b9";
export const url=new URL("../icons/dna-duotone.svg?v=5db1323751f3c8bd847a54eba7faa90b617e5bed48528a4ec77f182c7f29abdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
