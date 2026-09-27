export const name="fluid_balance-fill";
export const id="dl_4e6828a7a61cc1f292c0";
export const url=new URL("../icons/fluid_balance-fill.svg?v=6a2eece677698dfd044e4d57a4c4077dfa5bfa4494d76735c2b1c21bedf4e528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
