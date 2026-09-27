export const name="lucid_2-dam";
export const id="dl_aa250b9f274e4fba82b9";
export const url=new URL("../icons/lucid_2-dam.svg?v=7e3c2035122390f0e076055d205dd1c5885e28d32b3e494b437a3c31006f702f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
