export const name="table-2";
export const id="dl_16f281233c6d4d81bfd6";
export const url=new URL("../icons/table-2.svg?v=10cc24d71b8e8daae6cff416cfa0be79c9fe59d9e05cf50d538ed80506d6b86b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
