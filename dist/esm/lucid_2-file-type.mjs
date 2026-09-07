export const name="lucid_2-file-type";
export const id="dl_c07af63eb98a4ef19521";
export const url=new URL("../icons/lucid_2-file-type.svg?v=458f0fe1d5231a85e8b45b454772f9411e851c58b3f945ad0af1b23b8a81de4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
