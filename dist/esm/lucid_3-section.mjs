export const name="lucid_3-section";
export const id="dl_998096a1e24340e88360";
export const url=new URL("../icons/lucid_3-section.svg?v=2bb679c13760785afd79454bbde48406d230af812b7e7424d1865a5b7af39c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
