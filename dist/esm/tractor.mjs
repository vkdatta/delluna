export const name="tractor";
export const id="dl_dbdbf1fa60974897a24a";
export const url=new URL("../icons/tractor.svg?v=70a4308749761ff79de6540689fba2c4185eb55ac0d00c0128e9d097829fb017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
