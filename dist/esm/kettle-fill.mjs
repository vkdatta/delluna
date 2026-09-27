export const name="kettle-fill";
export const id="dl_ec56403ac4c327f498b2";
export const url=new URL("../icons/kettle-fill.svg?v=7cd476cad0e756fd427d216b4194266c5f883f1f856ed5efb48e31842b1d0efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
