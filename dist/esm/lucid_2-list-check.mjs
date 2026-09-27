export const name="lucid_2-list-check";
export const id="dl_1e284780057f4cf5a3fd";
export const url=new URL("../icons/lucid_2-list-check.svg?v=139f51926cc43e31c9ca1ece255f239644128eca005098bf48f01a17afabf74d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
