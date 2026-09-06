export const name="briefcase-fill";
export const id="dl_dbd21a2440cf42b98d53";
export const url=new URL("../icons/briefcase-fill.svg?v=da09cff8a2bdb1c75b756b14f999e876d1301338a271e9e147a1039db18b3011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
