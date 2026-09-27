export const name="dna-light";
export const id="dl_b9e857c18c6b4494ac32";
export const url=new URL("../icons/dna-light.svg?v=3dd4f10891b6e094795c3fcb351d63cf6efbd066f4c0972586dbddcce86a3a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
