export const name="grid-nine-light";
export const id="dl_723ad0843497428187a1";
export const url=new URL("../icons/grid-nine-light.svg?v=91ea662a040b7b046bf7e977c3a13b22a993df73973a54dbaf534338dd47ae5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
