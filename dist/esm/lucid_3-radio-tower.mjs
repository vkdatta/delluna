export const name="lucid_3-radio-tower";
export const id="dl_523184d24fa447ab8fc3";
export const url=new URL("../icons/lucid_3-radio-tower.svg?v=5affa64b95eee048987d33c2b01740ccf943a011fe151c132fac7731d68be157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
