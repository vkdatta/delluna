export const name="lunch_dining-fill";
export const id="dl_e205a4143200dd4e38e1";
export const url=new URL("../icons/lunch_dining-fill.svg?v=583c30b9c667997a3614d6f09754743424aff4a352575e3951c86e4f44f1e98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
