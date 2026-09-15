export const name="dishwasher_gen-fill";
export const id="dl_7de9fb2696d24a4d9b70";
export const url=new URL("../icons/D/dishwasher_gen-fill.svg?v=83a9a1e1b8a848f824f7146b8bf51ea13fc68fecea0e478cd2ed328c7ad19522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
