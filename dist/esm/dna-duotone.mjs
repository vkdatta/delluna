export const name="dna-duotone";
export const id="dl_6128df707629449aa8b9";
export const url=new URL("../icons/dna-duotone.svg?v=b607fa62713fdc05e60d4b8529d127296e666ab88576be8e124c39ad4d94b5fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
