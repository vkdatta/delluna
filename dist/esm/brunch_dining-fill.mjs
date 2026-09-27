export const name="brunch_dining-fill";
export const id="dl_f8258bda312257aeebf6";
export const url=new URL("../icons/brunch_dining-fill.svg?v=0ec2f5c7f5d043bc97aa0b3e5c62106ad5c33b25513b3aeded8470802cd49461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
