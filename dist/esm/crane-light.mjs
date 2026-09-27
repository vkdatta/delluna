export const name="crane-light";
export const id="dl_1cd430dbe83442c68845";
export const url=new URL("../icons/crane-light.svg?v=abcdf771e756851d50ec534c5013c12da6944aebb060c12d918362ca433f6a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
