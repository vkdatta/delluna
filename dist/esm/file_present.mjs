export const name="file_present";
export const id="dl_bcb1b0b611bf9321f90e";
export const url=new URL("../icons/file_present.svg?v=bc4a056c9801857a2149b0e69461f04afaac72aa615a49f219e906fdefb8fae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
